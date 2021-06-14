const mongoose=require('mongoose')
import { Schema, model as Model } from "mongoose"

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
            type:String
        },
        email:{
            type:String
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
        password_history:[historySchema],
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

module.exports=mongoose.models.User || Model("User",UserSchema,'users')