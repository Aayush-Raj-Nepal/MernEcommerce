const mongoose = require("mongoose");
import conn from "../app/mongodb";
import { Schema, model as Model } from "mongoose";
import autoIncrement from "mongoose-auto-increment";
mongoose.promise = global.Promise;
autoIncrement.initialize(conn);

let second_tier = new Schema(
  {
    name: {
      type: String,
    },
    priority: {
      type: Number,
    },
    description: {
      type: String,
    },
    image: {
      type: Schema.Types.ObjectId,
      ref: "Media",
    },
  },
  {
    timestamps: true,
  }
);

let CategorySchema = new Schema(
  {
    eng_name: {
      type: String,
    },

    nep_name: {
      type: String,
    },
    short_name: {
      nep: {
        type: String,
      },
      eng: {
        type: String,
      },
    },
    image: {
      type: Schema.Types.ObjectId,
      ref: "Media",
    },
    description: {
      type: String,
    },
    priorityOrder: {
      type: Number,
    },
    total_products: {
      type: Number,
    },
    sub_categories: [second_tier],
    inHome: {
      type: String,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

CategorySchema.plugin(autoIncrement.plugin, "Category");
module.exports =
  mongoose.models.Category || Model("Category", CategorySchema, "category");
