import {Schema,model as Model} from 'mongoose'

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

export default Model("ShopSchema",ShopSchema,"shopSchema")