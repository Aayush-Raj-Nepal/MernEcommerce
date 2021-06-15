const mongoose=require('mongoose')
import { Schema, model as Model } from "mongoose"

mongoose.promise=global.Promise;
let RatingSchema = new Schema({
    product_id:{
        type:Schema.Types.ObjectId,
        ref:'Product'
    },
    average_rating:{
        type:Number
    },
    ratings:[
        {
            user_id:{
                type:Schema.Types.ObjectId,
                ref:"User"
            },
            name:{
                type:String
            },
            rating:{
                type:Number
            },
            message:{
                type:String
            },
            time:{
                type:Date
            }


        }
    ],
    total_ratings:{
        type:Number
    }
})

module.exports=mongoose.models.Rating || Model('Rating',RatingSchema,'rating')