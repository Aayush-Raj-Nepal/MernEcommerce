import { Schema } from "mongoose"

let RatedProductsSchema = Schema({
	product_id: {
		type: Schema.Types.ObjectId,
		ref: "Product",
	},
	name: {
		type: String,
	},
	rating: {
		type: Number,
	},
})

export default RatedProductsSchema
