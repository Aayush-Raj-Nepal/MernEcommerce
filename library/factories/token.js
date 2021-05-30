import crypto from "crypto"

class TokenFactory {
	static produceToken(hours =48) {
		return {
			token: crypto.randomBytes(64).toString("hex"),
			expiry: new Date(Date.now() + hours * 60 * 60 * 1000),
		}
	}
}

export default TokenFactory
