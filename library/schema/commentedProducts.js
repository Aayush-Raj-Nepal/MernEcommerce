import { Schema } from "mongoose"

let CommentedProductsSchema = Schema({
	product_id: {
		type: Schema.Types.ObjectId,
		ref: "Product",
	},
	name: {
		type: String,
	},
	commentText: {
		type: String,
	},
    time: {
        type: Date,
    },
})

export default CommentedProductsSchema
