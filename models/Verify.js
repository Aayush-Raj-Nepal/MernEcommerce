const mongoose=require('mongoose')
import { Schema, model as Model } from "mongoose"

mongoose.promise=global.Promise;
let VerifySchema=new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    hash:{
        type:String,
        required:true
    },
    used:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true
})

module.exports=mongoose.models.Verify || Model("Verify",VerifySchema,'verifies')