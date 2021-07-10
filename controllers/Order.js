import Order from "../models/Orders";
import Product from "../models/Product";
import Offer from "../models/Offers";
import { GetRecent, GetBalance } from "../library/helpers";
const { validationResult } = require("express-validator");
exports.getAllOrders = (req, res) => {
  Order.find({})
    .populate("user_id")
    .then((orders) => {
      if (orders.length == 0) {
        res.status(404).json({
          error_message: "Cannot get list of orders",
        });
      } else {
        res.status(200).json(orders);
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({
        error_message: "Cannot get list of orders",
      });
    });
};
exports.updateOrder = (req, res) => {
  Order.findOneAndUpdate(req.body.query, req.body.update)
    .then((orders) => {
      res.status(200).json(orders);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({
        error_message: "Cannot update category",
      });
    });
};
exports.getOrderForPayment = (req, res) => {
  Order.findOne({ _id: req.body.id, user_id: req.body.user._id })
    .then((order) => {
      res.status(200).json(order);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({
        error_message: "Unable to fetch user Orders!",
      });
    });
};
exports.getMyOrders = (req, res) => {
  Order.find({ user_id: req.body.user._id })
    .then((orders) => {
      res.status(200).json(orders);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({
        error_message: "Unable to fetch user Orders!",
      });
    });
};
exports.getSingleOrder = (req, res) => {
  Order.findById(req.body.id)
    .then((category) => {
      if (!category) {
        res.status(404).json({
          error_message: "Cannot get category",
        });
      } else {
        res.status(200).json(category);
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({
        error_message: "Cannot get category",
      });
    });
};
exports.deleteOrder = (req, res) => {
  Order.findByIdAndDelete(req.body.id, function (err, category) {
    if (err) {
      console.log(err);
      res.status(404).json({
        error_message: "Cannot find the document",
      });
    } else {
      res.status(200).send(category);
      console.log("Deleted : ", category);
    }
  });
};
exports.createOrder = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      error_message: errors.array()[0].msg,
    });
  }
  let payload = req.body.payload;
  payload.products = payload.basket.map((p) => {
    return {
      count: p.count,
      name: p.title,
      price: p.price,
      product_id: p.id,
      total: p.price,
    };
  });

  payload.order_details = payload.orderDetails;
  payload.total = payload.products.reduce(
    (a, b) => (a += b.count * b.price),
    0
  );
  payload.user_id = req.body.user._id;
  payload.delivery_charge = {
    amount: payload.delivery_charge.amount,
    location: payload.delivery_charge.location,
    location_description: payload.delivery_charge.location_description,
  };
  delete payload.basket;
  delete payload.orderDetails;
  let productIds = payload.products.map((p) => {
    return p.product_id;
  });
  // console.log(payload);
  Product.find({
    _id: {
      $in: productIds,
    },
  })
    .then((products) => {
      let tPrice = 0;
      products.forEach((product) => {
        let pFromCart = payload.products.filter(
          (p) => p.product_id == product._id
        )[0];
        let dPercent = GetRecent(product.discount_history);
        let pPrice = GetRecent(product.price_history);
        let fPrice = pPrice - pPrice * (dPercent / 100);
        tPrice += parseFloat(fPrice * Number(pFromCart.count));
        // console.log(
        //   `dpercent ${dPercent} pPrice ${pPrice} fPrice ${fPrice} tPrice ${tPrice} pfromCart ${pFromCart}`
        // );
      });
      tPrice += parseInt(payload.delivery_charge.amount);
      payload.total = tPrice;
      let order = new Order(payload);
      order.save(function (err, order) {
        if (err) {
          console.log(err);
          res.status(401).json({ error_message: "Something Went Wrong" });
        }
        res.status(200).json(order);
      });
    })
    .catch((err) => {
      console.log(err);

      res.status(400).json({
        error_message: "Cannot place order",
      });
    });
};
exports.createOfferOrder = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      error_message: errors.array()[0].msg,
    });
  }
  let payload = req.body.payload;

  payload.order_details = payload.orderDetails;

  payload.user_id = req.body.user._id;
  payload.delivery_charge = {
    amount: payload.delivery_charge.amount,
    location: payload.delivery_charge.location,
    location_description: payload.delivery_charge.location_description,
  };
  // console.log(payload);
  Offer.findOne({
    _id: payload.offer,
  })
    .then((offer) => {
      let tPrice = offer.offer_price;
      tPrice += parseInt(payload.delivery_charge.amount);
      payload.total = tPrice;
      payload.order_type = "offer";
      payload.offer = {
        name: offer.offer_name,
        offer_id: offer._id,
      };
      let order = new Order(payload);
      order.save(function (err, order) {
        if (err) {
          User.findOneAndUpdate(
            { _id: payload.user_id },
            { $push: { orders: order._id } }
          );
          console.log(err);
          res.status(401).json({ error_message: "Something Went Wrong" });
        }
        res.status(200).json(order);
      });
    })
    .catch((err) => {
      console.log(err);

      res.status(400).json({
        error_message: "Cannot place order",
      });
    });
};
