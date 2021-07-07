require("dotenv").config()
const User = require("../models/User");
var uniqid = require('uniqid');
import bcrypt from "bcrypt"
import {GetRecent} from "../library/helpers"
import Verify from "../models/Verify"
import Admin from "../models/Admin"
import Sender from "../library/utilities/helper"
import TokenFactory from "../library/factories/token"
const { check, validationResult } = require("express-validator");
var jwt = require("jsonwebtoken");
var expressJwt = require("express-jwt");
// Admin functions

let serverUrl =
	process.env.NODE_ENV == "production"
		? "http://subidhaonline.com/api/"
		: "http://localhost:4000/api/"

    let redirectUrl =
    process.env.NODE_ENV == "production"
      ? "http://subidhaonline.com/"
      : "http://localhost:3001/"
exports.adminSignout=(req,res)=>{
    return res.send('admin signout')
}
exports.adminSignin=(req,res)=>{
		let { email, password } = req.body
		Admin.findOne({
			email: email,
		})
			.then(async (admin) => {
       
				let result = await bcrypt.compare(
					password,
					GetRecent(admin.password_history)
				)
        // console.log(admin.password_history)
        // console.log(password)
        // return
				if (result) {
					let token = TokenFactory.produceToken()
					if (admin.tokens == null) admin.tokens = []
					console.log(admin.tokens)

					Admin.findByIdAndUpdate(admin._id, {
						$set: { tokens: token },
					})
						.then((d) => {
							res.status(200).json({
								token: token,
								access_level: d.access_level,
								user:{
                  name:d.name,
                  email:d.email
                }
							})
						})
						.catch((e) => {
							res.status(404).json({
								message: "Something Went Wrong",
								code: 10,
							})
						})
				} else {
					throw "Wrong password"
				}
			})
			.catch((err) => {
				res.status(400).json({
					message: err.message,
				})
			})
	
}

// client functions
exports.checkUserExist=(req,res)=>{
  User.findOne({phone:req.body.id}).then(user=>{
    if (user) {
      return res.status(400).json({
        error_message:"User Already Exists"
      })
    } else {
      return res.status(200).json({
        message:"New user can be created !"
      })
    }
  }).catch(err=>{
    console.log(err)
    return res.status(400).json({
      error_message:"Error while checking user"
    })
  })
}
exports.signup = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      error_message: errors.array()[0].msg
    });
  }
  req.body.password_history=[
    {
      key: "String",
      value: bcrypt.hashSync(req.body.password, 10),
    },
  ],
  delete req.body.password
  req.body.tokens=[TokenFactory.produceToken()]
  // console.log(req.body)
  // let user=req.body
  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      console.log(err)
      return res.status(400).json({
        err: "NOT able to save user in DB"
      });
    }
    Sender.SendEmailVerificationMail(user._id,user.email)
    return res.json({
      name: user.name,
      email: user.email,
      phone:user.phone,
      token:user.tokens.pop(),
      id: user._id
    });
  });
};
exports.googlesignup = (req, res) => {
  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        error: "NOT able to save user in DB"
      });
    }
    return res.json({
      name: user.name,
      email: user.email,
      id: user._id
    });
  });
};

exports.signin = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      error_message: errors.array()[0].msg
    });
  }
  const { email, password } = req.body;
  User.findOne({
    email:email,verified:true
  })
    .then(async (user) => {
     
      let result = await bcrypt.compare(
        password,
        GetRecent(user.password_history)
      )
      // console.log(user.password_history)
      // console.log(password)
      // return
      if (result) {
        let token = TokenFactory.produceToken()
        if (user.tokens == null) user.tokens = []
        console.log(user.tokens)
        User.findByIdAndUpdate(user._id, {
          $set: { tokens: token },
        })
          .then((d) => {
            res.status(200).json({
              
                name:d.name,
                phone:d.phone,
                email:d.email,
                token:token
            })
          })
          .catch((e) => {
            res.status(404).json({
              message: "Something Went Wrong",
              code: 10,
            })
          })
      } else {
        throw "Wrong password"
      }
    })
    .catch((err) => {
      res.status(400).json({
        message: err.message,
      })
    })
};

exports.signout = (req, res) => {
  res.clearCookie("token");
  res.clearCookie("user");
  res.json({
    message: "User signout successfully"
  });
};
exports.verifyUser=(req, res)=>{
  var hash = req.body.hash
  Verify.findOne({
    hash: hash,
    used: false,
  })
    .then((data) => {
      if (data) {
        data.used = true
        data.save(function (err, d) {
          if (err) {
            console.log(err)
            res.redirect(redirectUrl + "#/verifyEmail?icon=warning&message=link%20invalid%20or%20expired")
          }
          // 
          User.findByIdAndUpdate(data.user, {
            $set: { verified: true },
          })
            .then((resp) => {
              res.redirect(redirectUrl + "#/verifyEmail?icon=success&message=Email%20Verified!")
            })
            .catch((err) => {
              res.redirect(redirectUrl + "#/verifyEmail?icon=warning&message=link%20invalid%20or%20expired")
            })
        })
      } else {
        res.redirect(redirectUrl + "#/verifyEmail?icon=warning&message=link%20invalid%20or%20expired")
      }
    })
    .catch((err) => {
      console.log(err)
      res.redirect(redirectUrl + "#/verifyEmail?icon=warning&message=link%20invalid%20or%20expired")
    })

  // client.verifyIdToken(req.body.oobCode).then(data => {
  //     console.log(data)
  // })

  // firebase.auth().applyActionCode(req.body.oobCode).then(data => {
  //         console.log(data)
  //     }).catch(err => {
  //         console.log(err)
  //     })
  // if (req.body.payload.email != null) {
  //     User.findOne({ email: req.body.payload.email }).then(function(user) {
  //         user.verified = true
  //         user.save()
  //         res.status(200).json({
  //             message: "Successfull"
  //         })
  //     }).catch(err => {
  //         res.status(501).json({
  //             message: "Unverified"
  //         })

  //     })
  // }
}