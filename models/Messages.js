import {Schema,model as Model} from "mongoose"


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

export default Model('Message',MessageSchema,'messages')