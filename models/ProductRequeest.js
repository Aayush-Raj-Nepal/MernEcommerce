import {Schema, model as Model} from 'mongoose'

let ProductRequestSchema=({
    name:{
        type:String,
        required:true,
    },
    user_since:{
        type:Date
    },
    contact_no:{
        type:String
    },
    requested_products:[
        {
            name:{type:String},
            description:{
                type:String,
                
            },
            authors:{
                type:String
            },
        }
    ],
    user_id:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
  

})



export default Model("ProductRequest",ProductRequestSchema,'productrequest')