const mongoose = require("mongoose");
import { Schema, model as Model } from "mongoose";

mongoose.promise = global.Promise;
let LocationSchema = Schema(
  {
    name: {
      type: String,
    },
    status: {
      type: Boolean,
      default: true,
    },

    price: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

export default Model("Location", LocationSchema, "Locations");
