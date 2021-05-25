import User from "../models/users"
import Admin from "../models/admin"
import Book from "../models/book"
import OBook from "../models/obook"
import TokenFactory from "../lib/factories/token"
import Sender from "./../utils/helper"
const ObjectId = require("mongoose").Types.ObjectId
export default {
	VerifyAccessToken(req, res, next) {
		let token = req.header("Authorization")
		console.log(token)
		let now = new Date(Date.now())
		User.findOne({
			tokens: {
				$elemMatch: {
					token: token,
					expiry: {
						$gt: now,
					},
				},
			},
		})
			.then(function (user) {
				//console.log(user)
				if (!user) {
					res.status(403).json({
						message: "Access Token Expired or Not Provided",
					})
				} else {
					req.body.user = user
					next()
				}
			})
			.catch(function (err) {
				res.status(500).json({
					message: "It's not you. It's us",
					err: err,
				})
			})
		//next()
	},

	VerifyAdmin(req, res, next) {
		let token = req.header("Authorization")
		let now = new Date(Date.now())
		Admin.findOne({
			tokens: {
				$elemMatch: {
					token: token,
					expiry: {
						$gt: now,
					},
				},
			},
		})
			.then(function (user) {
				if (!user) {
					res.status(403).json({
						message: "Access Token Expired or Not Provided 1213",
					})
				} else {
					req.body.admin = user
					next()
				}
			})
			.catch(function (err) {
				res.status(500).json({
					message: "It's not you. It's us",
					err: err,
				})
			})
	},
	VerifySuperAdmin(req, res, next) {
		let token = req.header("Authorization")
		let now = new Date(Date.now())
		Admin.findOne({
			tokens: {
				$elemMatch: {
					token: token,
					expiry: {
						$gt: now,
					},
				},
			},
			access_level: 3
		})
			.then(function (user) {
				console.log("HEY THIS IS THE SUPER ADMIN", JSON.stringify(user))
				if (!user) {
					res.status(403).json({
						message: "You are not super admin",
					})
				} else {
					req.body.admin = user
					next()
				}
			})
			.catch(function (err) {
				res.status(500).json({
					message: "It's not you. It's us",
					err: err,
				})
			})
	},
	VerifyPublisher(req, res, next) {
		let token = req.header("Authorization")
		let now = new Date(Date.now())
		User.findOne({
			tokens: {
				$elemMatch: {
					token: token,
					expiry: {
						$gt: now,
					},
				},
			},
			access_level: 2,
		})
			.then((publisher) => {
				console.log("got it", publisher)
				if (publisher) {
					req.body.publisher = publisher
					// console.log(req.body)
					next()
				} else {
					res.status(403).json({
						message: "Access Token Expired or Not Provided 1213",
					})
				}
			})
			.catch((err) => {
				res.status(500).json({
					message: "It's not you. It's us",
					err: err,
				})
			})
	},
	VerifyMember(req, res, next) {
		let token = req.header("Authorization")
		let now = new Date(Date.now())
		User.findOne({
			tokens: {
				$elemMatch: {
					token: token,
					expiry: {
						$gt: now,
					},
				},
			},
			phone_number_verified: true,
		})
			.then((publisher) => {
				// console.log("got it", publisher)
				if (publisher) {
					req.body.member = publisher
					// console.log(req.body)
					next()
				} else {
					res.status(403).json({
						message: "Access Token Expired or Not Provided 1213",
					})
				}
			})
			.catch((err) => {
				res.status(500).json({
					message: "It's not you. It's us",
					err: err,
				})
			})
	},
	VerifyMarketRepresentative(req, res, next) {
		let token = req.header("Authorization")
		let now = new Date(Date.now())
		User.findOne({
			tokens: {
				$elemMatch: {
					token: token,
					expiry: {
						$gt: now,
					},
				},
			},
			access_level: 3,
		})
			.then((mR) => {
				console.log("got it", mR)
				if (mR) {
					req.body.mR = mR
					console.log(req.body)
					next()
				} else {
					res.status(403).json({
						message: "Access Token Expired or Not Provided 1213",
					})
				}
			})
			.catch((err) => {
				res.status(500).json({
					message: "It's not you. It's us",
					err: err,
				})
			})
	},

	VerifyBookExistence(req, res, next) {
		if (ObjectId.isValid(req.body.id)) {
			Book.findById(req.body.id).then((d) => {
				if (d != null) {
					req.body.book = d
					next()
				} else {
					res.status(404).json({
						message: "Book Not Found",
						code: 10,
					})
				}
			})
		}
	},
	VerifyOBookExistence(req, res, next) {
		if (ObjectId.isValid(req.body.id)) {
			OBook.findById(req.body.id).then((d) => {
				if (d != null) {
					req.body.book = d
					next()
				} else {
					res.status(404).json({
						message: "Book Not Found",
						code: 10,
					})
				}
			})
		}
	},
	VerifyOperationAuthority(req, res, next) {
		if (req.body.admin.access_level > 0 && req.body.admin.access_level <= 3) {
			next()
		} else {
			if (req.body.book.created_by == req.body.admin._id) {
				next()
			} else {
				res.status(403).json({
					message: "Permission Denied",
					code: 10,
				})
			}
		}
	},
	VerifyBookAuthority(req, res, next) {
		if (req.body.admin.access_level == 1) {
			next()
		} else {
			req.body.query = {
				created_by: req.body.admin._id,
			}
			next()
		}
	},
	CheckUserAlreadyUsedEmail(req, res, next) {
		switch (req.body.payload.type) {
			case "social":
				// eslint-disable-next-line no-case-declarations
				let token = TokenFactory.produceToken()
				console.log(token)
				User.findOne({ email: req.body.payload.email })
					.then((user) => {
						if (user != null) {
							user.tokens = []
							user.tokens.push(token)
							user.save((err) => {
								if (err) throw err
								else {
									res.status(200).json([
										{
											account_balance:
												user.account_balance,
											amount_history: user.amount_history,
											access_level: user.access_level,
											coins_history: user.coins_history,
											email: user.email,
											name: user.name,
											phone: user.phone,
											tokens: token,
											_id: user._id,
											address: user.address,
											publication_id: user.publication_id,
											phone_number_verified: user.phone_number_verified
										},
									])
								}
							})
						} else {
							next()
						}
					})
					.catch(() => {
						res.status(403).json({
							message: "Something Went Wrong",
						})
					})
				break
			default:
				User.findOne({ email: req.body.payload.email }).then((user) => {
					if (user != null && user.verified) {
						res.status(403).json({
							message: "User already exists with this email.",
						})
					} else if (user != null && !user.verified) {
						Sender.SendEmailVerificationMail(user._id, user.email)
						res.status(200).json({
							message: "Please verify your email First.",
						})
					} else {
						next()
					}
				})
		}
	},
	CheckUserAlreadyUsedPhone(req, res, next) {
		User.findOne({ verified_number: req.body.payload.phone }).then((user) => {
			console.log(user)
			if (user != null && user.phone_number_verified == true && user.verified == true) {
				res.status(403).json({
					message: "User already exists with this Phone or Email",
				})
			} else if (user != null && !user.verified && !user.phone_number_verified) {
				User.findOneAndDelete({ verified_number: req.body.payload.phone }).then(res => {
					User.findOneAndDelete({ $or: [{ verified_number: req.body.payload.phone, email: req.body.payload.email }] }).then(resp => {
						console.log(resp)
						next()
					})
				}).catch(err => {
					res.status(400).json({ message: "Something Error Happened" })
				})
			} else {
				next()
			}
		})

	},
	CheckIfReferrerExists(req, res, next) {
		let referrer = req.body.payload.reffered_by
		if (referrer) {
			User.findById(referrer)
				.then((refUser) => {
					if (refUser) {
						console.log(refUser)
						req.body.payload.reffered_by = refUser
						next()
					} else {
						req.body.payload.reffered_by = ""
						next()
					}
				})
				.catch((err) => {
					req.body.payload.reffered_by = ""
					next()
				})
		} else {
			req.body.payload.reffered_by = ""
			next()
		}
	},
}
