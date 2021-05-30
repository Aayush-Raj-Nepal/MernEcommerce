import { Schema } from "mongoose"

let SocialSchema = Schema({
	provider: {
		type: String,
		enum: ["facebook", "google", "twitter"],
	},
	id: {
		type: String,
	},
	token: {
		type: String,
	},
})

export default SocialSchema
