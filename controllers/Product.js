import Product from "../models/Product";

const { validationResult } = require("express-validator");
exports.searchProducts = (req, res) => {
  req.body.page_size = req.body.page_size ? req.body.page_size : 10;
  req.body.page_no = req.body.page_no ? req.body.page_no : 1;
  let queryTOSearch = [
    {
      $match: {
        $or: [
          {
            "category.name": {
              $regex: req.body.query + ".*",
              $options: "i",
            },
          },
          {
            eng_name: {
              $regex: req.body.query + ".*",
              $options: "i",
            },
          },
          {
            nep_name: {
              $regex: req.body.query + ".*",
              $options: "i",
            },
          },
          {
            short_description: {
              $regex: req.body.query + ".*",
              $options: "i",
            },
          },
          {
            description: {
              $regex: req.body.query + ".*",
              $options: "i",
            },
          },
          {
            tags: {
              $regex: req.body.query + ".*",
              $options: "i",
            },
          },
        ],
      },
    },
    {
      $group: {
        _id: null,
        count: {
          $sum: 1,
        },
        results: {
          $push: "$$ROOT",
        },
      },
    },
    {
      $unwind: "$results",
    },
    {
      $skip: parseInt(req.body.page_size) * (req.body.page_no - 1),
    },
    {
      $limit: parseInt(req.body.page_size),
    },
    {
      $group: {
        _id: null,
        count: {
          $last: "$count",
        },
        results: {
          $push: "$$ROOT.results",
        },
      },
    },
    {
      $project: {
        _id: 0,
      },
    },
  ];

  let isAdmin = req.body.admin;
  console.log(isAdmin);
  if (!isAdmin) {
    queryTOSearch[0].$match["status"] = "Active";
  }

  let query = Product.aggregate(queryTOSearch);
  query
    .then((result) => {
      console.log(result);
      if (result[0]) {
        let Products = result[0].results.map((product) => {
          product.price = product.price_history.pop().value;
          product.discount = product.discount_history.pop().value;
          delete product.price_history;
          delete product.discount_history;
          return product;
        });
        res.status(200).json(Products);
      } else {
        return res.status(200).json([]);
      }
    })
    .catch((err) => {
      res.status(400).json({
        error_message: err.message,
      });
    });
};
exports.searchListProducts = (req, res) => {
  let queryTOSearch = [
    {
      $match: {
        $or: [
          {
            "category.name": {
              $regex: req.body.query + ".*",
              $options: "i",
            },
          },
          {
            eng_name: {
              $regex: req.body.query + ".*",
              $options: "i",
            },
          },
          {
            nep_name: {
              $regex: req.body.query + ".*",
              $options: "i",
            },
          },
          {
            short_description: {
              $regex: req.body.query + ".*",
              $options: "i",
            },
          },
          {
            description: {
              $regex: req.body.query + ".*",
              $options: "i",
            },
          },
          {
            tags: {
              $regex: req.body.query + ".*",
              $options: "i",
            },
          },
        ],
      },
    },
    {
      $group: {
        _id: null,
        count: {
          $sum: 1,
        },
        results: {
          $push: "$$ROOT",
        },
      },
    },
    {
      $unwind: "$results",
    },
    {
      $limit: 20,
    },
    {
      $group: {
        _id: null,
        count: {
          $last: "$count",
        },
        results: {
          $push: "$$ROOT.results",
        },
      },
    },
    {
      $project: {
        _id: 0,
      },
    },
  ];

  let isAdmin = req.body.admin;
  console.log(isAdmin);
  if (!isAdmin) {
    queryTOSearch[0].$match["status"] = "Active";
  }

  let query = Product.aggregate(queryTOSearch);
  query
    .then((result) => {
      console.log(result);
      if (result[0]) {
        let Products = result[0].results.map((product) => {
          return {
            name: product.eng_name,
            _id: product._id,
            image: product.images[0],
            category: product.category,
          };
        });
        res.status(200).json(Products);
      } else {
        return res.status(200).json([]);
      }
    })
    .catch((err) => {
      res.status(400).json({
        error_message: err.message,
      });
    });
};
exports.getSimilarProducts = (req, res) => {
  if (req.query.id && req.query.count) {
    Product.findOne({ _id: req.body.id }).then((product) => {
      if (product) {
        let count = req.query.count;

        let queryToMatch = [
          {
            $match: {
              $or: [
                {
                  "category.name": {
                    $regex: product.category.name + ".*",
                    $options: "i",
                  },
                },
                {
                  eng_name: {
                    $regex: product.eng_name + ".*",
                    $options: "i",
                  },
                },
                {
                  nep_name: {
                    $regex: product.nep_name + ".*",
                    $options: "i",
                  },
                },
                {
                  tags: {
                    $regex: product.tags.search + ".*",
                    $options: "i",
                  },
                },
              ],
            },
          },
          {
            $group: {
              _id: null,
              count: {
                $sum: 1,
              },
              results: {
                $push: "$$ROOT",
              },
            },
          },
          {
            $unwind: "$results",
          },
          // {
          // 	$skip: parseInt(req.body.page_size) * (req.body.page_no - 1),
          // },
          {
            $limit: parseInt(count ? count : 5),
          },
          {
            $group: {
              _id: null,
              count: {
                $last: "$count",
              },
              results: {
                $push: "$$ROOT.results",
              },
            },
          },
          {
            $project: {
              _id: 0,
            },
          },
        ];

        let isAdmin = req.body.admin;
        console.log(isAdmin);
        if (!isAdmin) {
          queryToMatch[0].$match["status"] = "Active";
        }

        let query = Product.aggregate(queryToMatch);
        query
          .then((result) => {
            console.log(result);
            let Products = result[0].results;
            Products.map((p) => {
              p.price = p.price_history.pop().value;
              p.discount = p.discount_history.pop().value;
              p.image = p.images[0];
              delete p.price_history;
              delete p.discount_history;
              delete p.images;
              return p;
            });
            Products.filter((p) => p._id != product._id);
            return res.status(200).json(Products);
          })
          .catch((err) => {
            res.status(400).json({
              error_message: err.message,
            });
          });
      } else {
        res.status(400).json({
          error_message: "invalid id",
        });
      }
    });
  } else {
    res.status(400).json({
      error_message: "invalid id",
    });
  }
};
exports.getLatestProducts = (req, res) => {
  Product.find({ status: "Active" })
    .sort({ createdAt: -1 })
    .limit(20)
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
        error_message: "Cannot get list of Products",
      });
    });
};
exports.getFeaturedProducts = (req, res) => {
  Product.find({ status: "Active", featured: true })
    .lean()
    .then((Products) => {
      if (Products.length == 0) {
        res.status(404).json({
          error_message: "No Featured Products found",
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
