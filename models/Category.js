import {Schema,model as Model} from 'mongoose'


let second_tier = new Schema(
	{
		name: {
			type: String,
		},
		priority: {
			type: Number,
		},
		description: {
			type: String,
		},
        image:{
            type:Schema.Types.ObjectId,
            ref:'Media'
        },
		
	},
	{
		timestamps: true,
	}
)

let CategorySchema=new Schema({
    name:{
        type:string,
        required:true
    },
    short_name:{
        type:String
    },
    image:{
        type:Schema.Types.ObjectId,
        ref:'Media'
    },
    description:{
        type:String
    },
    priorityOrder:{
        type:Number,
   
    },
    total_products:{
        type:Number
    },
    sub_categories:[
        second_tier
    ]
},{
    timestamps:true
})

export default Model('Category',CategorySchema,'category')