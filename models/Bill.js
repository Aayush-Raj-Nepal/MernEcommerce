import {Schema,model as Model} from 'mongoose'

let BillSchema=({
    bill_no:{
        type:NUmber
    },
    remarks:{
        type:String
    },
    date:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    print_history:[
        {
            name:{type:String},
            admin_id:{
                type:Schema.Types.ObjectId,
                ref:"Admin"
            },
            time:new Date(Date.now())
        }
    ],
    address:{
        type:String
    },
    phone:[
        {type:String}
    ],
    delivery_charge:{
        type:String,
        currency:{
            type:String,
            enum:['nrs','inc','$'],
            default:'nrs'
        }
    },
    order:{
        order_id:{
            type:Schema.Types.ObjectId,
            ref:'orders'
        },
        total_items:{
            type:Number
        }
    },
    verified_by:{
        type:Schema.Types.ObjectId,
        ref:'Admin'
    }
},{
    timestamps:true
})

export default MOodel("Bill",BillSchema,'bills')