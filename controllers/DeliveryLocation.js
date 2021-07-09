import DL from "../models/DeliveryLocations";
const { validationResult } = require("express-validator");
exports.getAllDLs = (req, res) => {
  DL.find({})
    .then((categories) => {
      if (categories.length == 0) {
        res.status(404).json({
          error_message: "Cannot get list of categories",
        });
      } else {
        res.status(200).json(categories);
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({
        error_message: "Cannot get list of categories",
      });
    });
};
exports.getHomeDLs = async (req, res) => {
  await DL.find({ inHome: true })
    .lean()
    .then((categories) => {
      if (categories.length == 0) {
        res.status(404).json({
          error_message: "Cannot get list of categories",
        });
      } else {
        res.status(200).json(categories);
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({
        error_message: "Cannot get list of categories",
      });
    });
};
exports.updateDL = (req, res) => {
  DL.findOneAndUpdate(req.body.query, req.body.update)
    .then((categories) => {
      res.status(200).json(categories);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({
        error_message: "Cannot update category",
      });
    });
};
exports.getSingleDL = (req, res) => {
  DL.findById(req.body.id)
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
exports.deleteDL = (req, res) => {
  DL.findByIdAndDelete(req.body.id, function (err, category) {
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
exports.createDL = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      error_message: errors.array()[0].msg,
    });
  }
  let payload = req.body;
  let category = new DL({
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
