const mongoose=require('mongoose')
import { Schema, model as Model } from "mongoose"
const crypto = require("crypto");
// const uuidv1 = require("uuid/v1");
import { v1 as uuidv1 } from 'uuid';
mongoose.promise=global.Promise;
import {SchemaProvider} from "../library/schema/provider"
import SocialSchema from "../library/schema/social"
import RatedProductsSchema from "../library/schema/ratedProducts"
import CommentedProductsSchema from "../library/schema/commentedProducts";

let historySchema=SchemaProvider(String,String)
let balanceSchema=new Schema(
    {
        title: {
            type: String,
        },
        amount: {
            type: Number,
        },
        description: {
            type: String,
            default: "",
        },
        date: {
            type: Date,
            default: Date.now,
        },
    }
)
let UserSchema=Schema(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        phone:{
            type:String
        },
        address:[
            {
                name:{
                    type:String
                },
                added_on: {
                    		type: Date,
                    		default: new Date(Date.now()),
                    	},
            }
        ],
        account_balance:[balanceSchema],
        current_balance:{
            type:String,
        },
        socials:[SocialSchema],
        encry_password: {
            type: String,
          },
          salt: String,
        rated_products:[RatedProductsSchema],
        images:[
            {
                type:Schema.Types.ObjectId,
                ref:'Media'
            }
        ],
        last_active:{
            type:Date
        },
        commented_products:[CommentedProductsSchema]
    },{
        timestamps:true

    }
)

UserSchema
  .virtual("password")
  .set(function(password) {
    this._password = password;
    this.salt = uuidv1();
    this.encry_password = this.securePassword(password);
  })
  .get(function() {
    return this._password;
  });
UserSchema.methods = {
  autheticate: function(plainpassword) {
    return this.securePassword(plainpassword) === this.encry_password;
  },

  securePassword: function(plainpassword) {
    if (!plainpassword) return "";
    try {
      return crypto
        .createHmac("sha256", this.salt)
        .update(plainpassword)
        .digest("hex");
    } catch (err) {
      return "";
    }
  }
};

module.exports=mongoose.models.User || Model("User",UserSchema,'users')