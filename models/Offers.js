const mongoose=require('mongoose')
import { Schema, model as Model } from "mongoose"

mongoose.promise=global.Promise;
let OfferSchema=new Schema({
    offer_name:{
        type:String,
        required:true
    },
    title:{
        required:true,
        type:String
    },
    sub_title:{
        type:String
        ,required:true
    },
    products:[
        {
            name:{
                type:String
            },
            product_id:{
                type:Schema.Types.ObjectId,
                ref:'Product'
            }
        }
    ],
    real_price:{
        type:Number,
        required:true
    }
,offer_price:{
    type:number
    ,required:true
},
expires_on:{
    type:Date,
    required:true
},
offer_actice:{
    type:Boolean,
    default:false
}

},{
    timestamps:true
})

module.exports=mongoose.models.Offer || Model('Offer',OfferSchema,'offers')