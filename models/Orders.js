const mongoose=require('mongoose')
import { Schema, model as Model } from "mongoose"

mongoose.promise=global.Promise;
let OrderSchema=new Schema({
    products:[
        {    
            count:{type:Number},
            name:{type:String},
            price:{type:Number},
            product_id:{
                type:Schema.Types.ObjectId,
                ref:'Book'
            },
            offer_id:{
                type:Schema.Types.ObjectId,
                ref:'Offer'
            },
            item_type:{
                type:String,
                enum:['offer','product'],
                default:'product'
            }
        }
    ],
    total:{
        type:Number
    },
    user_id:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    delivery_charge:{
        amount:{
            type:Number
        },
        location:{
            type:String
        },
        location_description:{
            type:String
        }
    },
    order_status:{
        type:String,
        enum:['new','packaging','shipping','completed']
    },
    cart_type:{
        type:String,
        enum:['POD','ONLINE'],
        default:'POD'
    },
    paid:{
        type:Boolean,
        default:false
    },
    payment_id:{
        type:Schema.Types.ObjectId,
        ref:'Payment'
    },
    payment_description:{
        type:String
    },
    pinned: {
        status: {
            type: Boolean,
        },
        pinned_by: {
            admin_name: {
                type: String
            },
            admin_id: {
                type: Schema.Types.ObjectId,
                ref: 'Admin'
            }
        }
    },
    last_activity_on:{
        type:Date
    }




},{
    timestamps:true
})


module.exports=mongoose.models.Order || Model('Order',OrderSchema,'orders')