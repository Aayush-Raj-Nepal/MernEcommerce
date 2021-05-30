import { Schema } from "mongoose"

export function SchemaProvider(keytype, valuetype) {
	return Schema({
		title: {
			type: String,
		},
		key: {
			type: keytype,
		},
		value: {
			type: valuetype,
		},
		time: {
			type: Date,
			//Check if this gives problems
			default: new Date(Date.now()),
		},
	})
}
