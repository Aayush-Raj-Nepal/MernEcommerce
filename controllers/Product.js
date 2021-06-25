import Product from "../models/Product";

const { validationResult } = require("express-validator");
exports.getLatestProducts = (req, res) => {
  Product.find({ status: "Active" })
    .sort({ createdAt: -1 })
    .limit(20)
    .then((Products) => {
      if (Products.length == 0) {
        res.status(404).json({
          error_message: "No Products found",
        });
      } else {
        res.status(200).json(Products);
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({
        error_message: "Cannot get list of Products",
      });
    });
};
exports.getFeaturedProducts = (req, res) => {
  Product.find({ status: "Active", featured: true })
    .then((Products) => {
      if (Products.length == 0) {
        res.status(404).json({
          error_message: "No Featured Products found",
        });
      } else {
        res.status(200).json(Products);
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({
        error_message: "Cannot get  product featured ",
      });
    });
};
exports.getProductByCategory = (req, res) => {
  Product.find({ "category.cat_id": req.body.id, status: "Active" })
    .lean()
    .then((Products) => {
      if (Products.length == 0) {
        res.status(404).json({
          error_message: "No Products found",
        });
      } else {
        Products.map((product) => {
          product.price = product.price_history.pop().value;
          product.discount = product.discount_history.pop().value;
          delete product.price_history;
          delete product.discount_history;
          return product;
        });
        res.status(200).json(Products);
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({
        error_message: "Cannot get products from category ",
      });
    });
};
exports.getProductToEdit = (req, res) => {
  Product.find(req.body.id)
    .lean()
    .then((product) => {
      if (!product) {
        res.status(404).json({
          error_message: "No  Product found",
        });
      } else {
        product.toObject();
        product.price = product.price_history.pop().value;
        product.discount = product.discount_history.pop().value;
        delete product.price_history;
        delete product.discount_history;
        return res.status(200).json(product);
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({
        error_message: "Cannot get a product to edit",
      });
    });
};

exports.getsingleproduct = (req, res) => {
  Product.findOne({ _id: req.body.id, status: "Active" })
    .lean()
    .then((product) => {
      if (!product) {
        res.status(404).json({
          error_message: "Cannot get the product ",
        });
      } else {
        product.price = product.price_history.pop().value;
        product.discount = product.discount_history.pop().value;
        delete product.price_history;
        delete product.discount_history;
        console.log(typeof product);
        return res.status(200).json(product);
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({
        error_message: "Cannot get a product to edit",
      });
    });
};
exports.getAllProducts = (req, res) => {
  Product.find({})
    .sort({ createdAt: -1 })
    .then((Products) => {
      if (Products.length == 0) {
        res.status(404).json({
          error_message: "No Products found",
        });
      } else {
        res.status(200).json(Products);
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({
        error_message: "Cannot get list of Products",
      });
    });
};
exports.updateProduct = (req, res) => {
  Product.findOneAndUpdate(req.body.query, req.body.update)
    .then((products) => {
      res.status(200).json(products);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({
        error_message: "Cannot update product",
      });
    });
};
exports.addProduct = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      error_message: errors.array()[0].msg,
    });
  }
  let payload = req.body;

  let product = new Product({
    category: payload.category,
    nep_name: payload.nep_name,
    images: payload.images,
    price_history: [
      {
        key: "Number",
        value: payload.price,
      },
    ],
    discount_history: [
      {
        key: "Number",
        value: payload.discount,
      },
    ],
    tags: payload.tags,
    product_source_type: payload.product_source_type,
    short_description: payload.short_description,
    short_name: payload.short_name,
    eng_name: payload.eng_name,
    short_name: payload.short_name,
    image: payload.image,
    stock: payload.stock,
    stock_history: [
      {
        stock_update_information: "New Stock",
        updated_amount: payload.stock,
      },
    ],
    description: payload.description,
  });
  // console.log(payload);
  product.save(function (err, Product) {
    if (err) {
      console.log(err);
      res.status(401).json({ error_message: "Something Went Wrong12" });
    }
    res.status(200).json(Product);
  });
};
exports.deleteProduct = (req, res) => {
  Product.findByIdAndDelete(req.body.id, function (err, product) {
    if (err) {
      console.log(err);
      res.status(404).json({
        error_message: "Cannot find the document",
      });
    } else {
      res.status(200).send(product);
      console.log("Deleted : ", product);
    }
  });
};
