require("dotenv").config()
const User = require("../models/user");
var uniqid = require('uniqid');
import bcrypt from "bcrypt"
import {GetRecent} from "../library/helpers"
import Admin from "../models/Admin"
import TokenFactory from "../library/factories/token"
const { check, validationResult } = require("express-validator");
var jwt = require("jsonwebtoken");
var expressJwt = require("express-jwt");
// Admin functions

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
exports.signup = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg
    });
  }
  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        err: "NOT able to save user in DB"
      });
    }
    return res.json({
      name: user.name,
      email: user.email,
      phone: user.phone,
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
      phone: user.phone,
      id: user._id
    });
  });
};

exports.signin = (req, res) => {
  const errors = validationResult(req);
  const { email, password } = req.body;

  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg
    });
  }

  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "USER email does not exists"
      });
    }

    if (!user.autheticate(password)) {
      return res.status(401).json({
        error: "Email and password do not match"
      });
    }

    // //create token
    // const token = jwt.sign({ _id: user._id }, process.env.SECRET);
    // //put token in cookie
    // res.cookie("token", token, { expire: new Date() + 9999 });

    // //send response to front end
    // const { _id, name, email, role, status,phone } = user;
    // return res.json({ token, user: { _id, name, email, role, status,phone } });
  });
};

exports.signout = (req, res) => {
  res.clearCookie("token");
  res.clearCookie("user");
  res.json({
    message: "User signout successfully"
  });
};

// protected routes

exports.isSignedIn = expressJwt({
  secret: process.env.SECRET,
  userProperty: "auth",  algorithms: ['RS256']

});

//custom middlewares
exports.isAuthenticated = (req, res, next) => {
  let checker = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!checker) {
    return res.status(403).json({
      error: "ACCESS DENIED"
    });
  }
  next();
};

exports.isAdmin = (req, res, next) => {
  if (req.profile.role !== 1) {
    return res.status(403).json({
      error: "You are not ADMIN, Access denied"
    });
  }
  next();
};
