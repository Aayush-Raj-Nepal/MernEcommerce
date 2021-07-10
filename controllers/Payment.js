import Order from "../models/Orders";
import Product from "../models/Product";
import User from "../models/User";
import Message from "../models/Messages";
import Payment from "../models/Payment";
import axios from "axios";
let redirectUrl =
  process.env.NODE_ENV == "production"
    ? "http://subidhaonline.com/"
    : "http://localhost:3001/";
exports.esewaPay = async (req, res) => {
  let oid = req.body.oid;
  if (!oid) {
    res.redirect(redirectUrl + "#/pfailure");
  } else {
    await Order.findById(oid)
      .populate("user_id")
      .then(async (order) => {
        if (order.paid == true) {
          res.redirect(redirectUrl + "#/psuccess");
        } else {
          let params = {
            scd: "NEPBOOKS",
            rid: req.body.refId,
            amt: order.total,
            pid: order._id,
          };
          // console.log(params);
          console.log(order);
          let url = `https://esewa.com.np/epay/transrec?scd=NEPBOOKS&rid=${req.body.refId}&amt=${order.total}&pid=${req.body.oid}`;
          axios.get(url).then(async (response) => {
            let responseString = response.data;
            // console.log(responseString);
            if (responseString.indexOf("Success") != -1) {
              let operation = await handleCheckout(order, order.user_id);
              if (operation) {
                res.redirect(redirectUrl + "#/psuccess");
              } else {
                res.redirect(redirectUrl + "#/pfailure");
              }
            } else {
              res.status(418).json({
                message: "Don't play with us",
              });
            }
          });
        }
      })
      .catch((err) => {
        console.log(err);
        res.redirect(redirectUrl + "#/pfailure");
        // res.status(400).json({
        //   error_message: "Payment failed",
        // });
      });
  }
  // console.log(req.body);
};

const handleCheckout = async (order, user) => {
  let uid = JSON.stringify(user._id);
  try {
    const session = await Payment.startSession();
    session.startTransaction();
    try {
      await Payment.create(
        [
          {
            provider: "Subidhaonline",
            amount: order.total,
            ref_id: uid,
            order: order._id,
            user_id: order.user_id,
          },
        ],
        { session: session }
      );

      await Order.findByIdAndUpdate(
        order._id,
        { paid: true },
        { session: session }
      );
      try {
        order.products.forEach(async (product) => {
          await Product.findByIdAndUpdate(product._id, {
            $push: {
              stock_update_information: {
                type: String,
              },
              updated_amount: "-" + product.count,
            },
            $inc: { stock: -Number(product.count) },
          }),
            { session: session };
        });
      } catch (err) {
        await session.abortTransaction();
        session.endSession();
        console.log(err);
        return false;
      }
      Message.create(
        [
          {
            title: "Payment Completed",
            description: "A payment was completed by a user",
            user_id: order.user_id,
          },
        ],
        { session: session }
      );
      await session.commitTransaction();
      session.endSession();
      return true;
    } catch (err) {
      await session.abortTransaction();
      session.endSession();
      console.log(err);
      return false;
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};
