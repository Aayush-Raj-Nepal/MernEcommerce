import { Schema, model as Model } from "mongoose"

let PaymentSchema = Schema({
	provider: {
		type: String,
	},
	amount: {
		type: Number,
	},
	ref_id: {
		type: String,
	},
	time: {
		type: Date,
		default: new Date(Date.now()),
	},
	user_id:{
		type: Schema.Types.ObjectId,
		ref:"User"
	},
	order_id: {
		type: Schema.Types.ObjectId,
		ref: "Order",
	},
	extras: [],
},
{
	timestamps: true
})

export default Model("Payment", PaymentSchema, "payments")
