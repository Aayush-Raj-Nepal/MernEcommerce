const mongoose=require('mongoose')
import { Schema, model as Model } from "mongoose"

mongoose.promise=global.Promise;
let MessageSchema=new Schema({
    title:{
        type:String
    },
    description:{
        type:String,
    },
    message_type:{
        type:String,
        enum:['contact','help','general'],
        default:'general'
    },
    user_id:{
        type:Schema.Types.ObjectId,
        ref:'User'
    }
},{
    timestamps:true
})


module.exports=mongoose.models.Message || Model('Message',MessageSchema,'messages')