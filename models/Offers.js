const mongoose = require("mongoose");
import { Schema, model as Model } from "mongoose";

import { SchemaProvider } from "../library/schema/provider";

let HistorySchema = SchemaProvider(String, String);
mongoose.promise = global.Promise;
let OfferSchema = new Schema(
  {
    offer_name: {
      type: String,
      required: true,
    },
    tags: [
      {
        type: String,
      },
    ],
    title: {
      required: true,
      type: String,
    },
    sub_title: {
      type: String,
      required: true,
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
    },
    discount: {
      type: String,
    },
    offer_price: {
      type: Number,
      required: true,
    },
    images: [
      {
        type: Schema.Types.ObjectId,
        ref: "Media",
      },
    ],
    description: {
      type: String,
    },
    real_price: {
      type: Number,
      required: true,
    },
    expires_on: {
      type: Date,
    },
    offer_active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.models.Offer || Model("Offer", OfferSchema, "offers");
