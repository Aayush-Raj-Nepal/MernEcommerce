const mongoose=require('mongoose')
import { Schema, model as Model } from "mongoose"

mongoose.promise=global.Promise;
let singleCommentSchema= new Schema({
    user_id:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    message:{
        type:String
    },
    date:{
        type:Date
    }
})

let CommentSchema= new Schema({
    product_id:{
        type:Schema.Types.ObjectId,
        ref:"product"
    },
    total_comments:{
        type:Number
    },
    comments:[
        singleCommentSchema
    ]
},{timestamps:true}
)


module.exports=mongoose.models.Comment || Model('Comment',CommentSchema,'comment')