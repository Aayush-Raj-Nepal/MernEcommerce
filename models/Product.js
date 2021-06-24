const mongoose = require("mongoose");
import { Schema, model as Model } from "mongoose";
import conn from "../app/mongodb";
import autoIncrement from "mongoose-auto-increment";

mongoose.promise = global.Promise;
autoIncrement.initialize(conn);

import { SchemaProvider } from "../library/schema/provider";

let HistorySchema = SchemaProvider(String, String);
let ProductSchema = new Schema({
  featured: {
    type: Boolean,
    default: false,
  },
  eng_name: {
    type: String,
  },
  productId: {
    type: String,
  },
  nep_name: {
    type: String,
  },
  tags: [
    {
      type: String,
    },
  ],
  product_no: {
    type: Number,
  },
  description: {
    type: String,
  },
  short_description: {
    type: String,
  },
  product_details: {
    type: String,
  },
  product_source_type: {
    type: String,
    enum: ["MYSTORE", "SHOP"],
  },
  product_from: {
    name: { type: String },
    source_id: {
      type: Schema.Types.ObjectId,
      ref: "Shop",
    },
  },
  category: {
    name: {
      type: String,
    },
    cat_id: {
      type: Number,
      ref: "Category",
    },
    sub_category: {
      name: {
        type: String,
      },
    },
  },
  stock: {
    type: Number,
    default: 0,
  },
  images: [
    {
      type: Schema.Types.ObjectId,
      ref: "Media",
    },
  ],
  stock_history: [
    {
      stock_update_information: {
        type: String,
      },
      updated_amount: {
        type: String,
      },
    },
  ],
  discount_history: [HistorySchema],
  price_history: [HistorySchema],
  added_by: {
    type: Schema.Types.ObjectId,
    ref: "Admin",
  },
  rating: {
    rating_tracker: {
      type: Schema.Types.ObjectId,
      ref: "Rating",
    },
    average_rating: {
      type: Number,
    },
    total_ratings: {
      type: Number,
    },
  },
  status: {
    type: String,
    enum: ["Active", "Inactive"],
  },
});

ProductSchema.plugin(autoIncrement.plugin, {
  model: "Product",
  field: "productId",
});
module.exports =
  mongoose.models.Product || Model("Product", ProductSchema, "products");
