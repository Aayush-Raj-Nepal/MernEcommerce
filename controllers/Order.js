import Order from "../models/Orders";
const { validationResult } = require("express-validator");
exports.getAllOrders = (req, res) => {
  Order.find({})
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
  payload.products=payload.basket.map(p=>{
      return {
          count:p.count,
          name:p.title,
          price:p.price,
          product_id:p.id
      }
  })
  payload.user_id=req.body.user._id,
  payload.delivery_charge={
      amount:payload.delivery_charge.amount,
      location:payload.delivery_charge.location,
      location_description:payload.delivery_charge.location_description
  }
  console.log(payload)
    let category = new Order({
    nep_name: payload.nep_name,
    eng_name: payload.eng_name,
    short_name: payload.short_name,
    image: payload.image,
    description: payload.description,
  });
  category.save(function (err, category) {
    if (err) {
      console.log(err);
      res.status(401).json({ error_message: "Something Went Wrong12" });
    }
    res.status(200).json(category);
  });
};
