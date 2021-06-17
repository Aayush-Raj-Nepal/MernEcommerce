import Category from "../models/Category";

const { validationResult } = require("express-validator");
exports.getAllCategories = (req, res) => {
  Category.find({})
    .then((categories) => {
      res.status(200).json(categories);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({
        error_message: "Cannot get list of categories",
      });
    });
};
exports.getSingleCategory = (req, res) => {
  Category.findById(req.body.id)
    .then((category) => {
      res.status(200).json(category);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({
        error_message: "Cannot get category",
      });
    });
};
exports.deleteCategory = (req, res) => {
  Category.findByIdAndDelete(req.body.id, function (err, category) {
    if (err) {
      console.log(err);
      res.status(404).json({
        message: "Cannot find the document",
      });
    } else {
      res.status(200).send(category);
      console.log("Deleted : ", category);
    }
  });
};
exports.createCategory = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }
  let payload = req.body;
  let category = new Category({
    nep_name: payload.nep_name,
    eng_name: payload.eng_name,
    short_name: payload.short_name,
    image: payload.image,
    description: payload.description,
  });
  category.save(function (err, category) {
    if (err) {
      console.log(err);
      res.status(401).json({ message: "Something Went Wrong12" });
    }
    res.status(200).json(category);
  });
};
