import {Schema,model as Model} from 'mongoose'

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
export default Model("Verify",VerifySchema,'verifies')