const mongoose=require('mongoose')
import { Schema, model as Model } from "mongoose"

mongoose.promise=global.Promise;
let ShopSchema=new Schema({
    shop_name:{
        type:String
    },
    contact_persons:[
        {
            name:{type:String},
            contact_no:{type:String}
        }
    ],
    total_products_supplied:{
        type:Number
    }
},{
    timestamps:true
})


module.exports=mongoose.models.Shop || Model("Shop",ShopSchema,"shop")