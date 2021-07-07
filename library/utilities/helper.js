import Verify from "../../models/Verify"
import crypto from "crypto"
const mailer = require("../../app/mailer")
let serverUrl =
	process.env.NODE_ENV == "production"
		? "http://subidhaonline.com/api/auth/"
		: "http://localhost:4000/api/auth/"
export default {
	SendEmailVerificationMail: (user, email) => {
		var key = "b9549185e3d0b35f49ad0a6db23dc358"
		const hash = crypto.randomBytes(256).toString("hex", hash)
		Verify.create({
			user: user,
			hash: hash,
		}).then((data) => {
			var payload = {
				password_hash: hash,
				email: email,
				hash: key,
			}
			var mailOptions = {
				from: process.env.SMTP_USER,
				to: email,
				subject: "Subidhaonline: Verify Your Email",
				text: `Hello User,\n  Follow this link to verify your email address. ${serverUrl}verifyUser?hash=${hash} <br> If you didn’t ask to verify this address, you can ignore this email  \nThanks, \nYour Subidhaonline.com team`,
			}
			mailer.sendMail(mailOptions, (err, info) => {
				if (err) {
					console.log(err)
				} else {
					console.log("Email Sent")
				}
			})
			// Axios.get('http://loksewaguide.com/test_send_email.php?password_hash=' + hash + "&email=" + email + "&hash=" + key).then(resp => {
			//     console.log(resp.data)
			// }).catch(err => {
			//     console.log(err)
			// })
		})
	},
}
