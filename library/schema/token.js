import { Schema } from "mongoose"

let TokenSchema = Schema({
	token: {
		type: String
	},
	expiry: {
		type : Date
	}
})

export default TokenSchema
