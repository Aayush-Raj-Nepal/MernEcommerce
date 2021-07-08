import Offer from "../models/Offers";

const { validationResult } = require("express-validator");

exports.getOfferToEdit = (req, res) => {
  Offer.find(req.body.id)
    .lean()
    .then((offer) => {
      if (!offer) {
        res.status(404).json({
          error_message: "No  Offer found",
        });
      } else {
        offer.toObject();
        offer.price = offer.price_history.pop().value;
        offer.discount = offer.discount_history.pop().value;
        delete offer.price_history;
        delete offer.discount_history;
        return res.status(200).json(offer);
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({
        error_message: "Cannot get a offer to edit",
      });
    });
};

exports.getsingleOffer = (req, res) => {
  Offer.findOne({ _id: req.body.id, status: "Active" })
    .lean()
    .then((offer) => {
      if (!offer) {
        res.status(404).json({
          error_message: "Cannot get the offer ",
        });
      } else {
        offer.price = offer.price_history.pop().value;
        offer.discount = offer.discount_history.pop().value;
        delete offer.price_history;
        delete offer.discount_history;
        console.log(typeof offer);
        return res.status(200).json(offer);
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({
        error_message: "Cannot get a offer to edit",
      });
    });
};
exports.getAllOffers = (req, res) => {
  Offer.find({})
    .sort({ createdAt: -1 })
    .then((Offers) => {
      if (Offers.length == 0) {
        res.status(404).json({
          error_message: "No Offers found",
        });
      } else {
        res.status(200).json(Offers);
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({
        error_message: "Cannot get list of Offers",
      });
    });
};
exports.updateOffer = (req, res) => {
  Offer.findOneAndUpdate(req.body.query, req.body.update)
    .then((offers) => {
      res.status(200).json(offers);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({
        error_message: "Cannot update offer",
      });
    });
};
exports.addOffer = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      error_message: errors.array()[0].msg,
    });
  }
  let payload = req.body;
  let offer = new Offer({
    offer_name: payload.offer_name,
    tags: payload.tags,
    title: payload.title,
    sub_title: payload.sub_title,
    real_price: payload.real_price,
    category: payload.category,
    stock: payload.stock,
    price_history: [
      {
        key: "Number",
        value: payload.offer_price,
      },
    ],
    discount_history: [
      {
        key: "Number",
        value: payload.discount,
      },
    ],
    images: payload.images,
    products: payload.products,
  });
  console.log(offer);
  offer.save(function (err, Offer) {
    if (err) {
      console.log(err);
      res.status(401).json({ error_message: "Something Went Wrong12" });
    }
    res.status(200).json(Offer);
  });
};
exports.deleteOffer = (req, res) => {
  Offer.findByIdAndDelete(req.body.id, function (err, offer) {
    if (err) {
      console.log(err);
      res.status(404).json({
        error_message: "Cannot find the document",
      });
    } else {
      res.status(200).send(offer);
      console.log("Deleted : ", offer);
    }
  });
};
