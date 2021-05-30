import {Schema,model as Model} from 'mongoose'

let RatingSchema = new Schema({
    product_id:{
        type:Schema.Types.ObjectId,
        ref:'Product'
    },
    average_rating:{
        type:Number
    },
    ratings:[
        {
            user_id:{
                type:Schema.Types.ObjectId,
                ref:"User"
            },
            name:{
                type:String
            },
            rating:{
                type:Number
            },
            message:{
                type:String
            },
            time:{
                type:Date
            }


        }
    ],
    total_ratings:{
        type:Number
    }
})

export default Model('Rating',RatingSchema,'rating')