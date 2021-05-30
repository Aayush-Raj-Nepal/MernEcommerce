import {Schema,model as Model} from 'mongoose'


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

export default Model('Comment',CommentSchema,'comment')