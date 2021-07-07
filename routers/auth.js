var express = require("express");
var router = express.Router();
const { check, validationResult } = require("express-validator");
const { signout, signup, signin,resetPassword,forgetP,checkUserExist,verifyUser } = require("../controllers/Auth");
import {Auth,Request} from "../middlewares"
import AdminAuthRouter from "./adminAuth"

router.use("/admin", AdminAuthRouter)

router.get("/user/exists/:id",Request.ParamsToBody, checkUserExist)
// admin
router.post(
  "/signup",
  [
    check("name", "name should be at least 3 char").isLength({ min: 3 }),
    check("email", "correct email is required").isEmail(),
    check("password", "password should be at least 3 char").isLength({ min: 3 })
  ],
  signup
);
router.get("/verifyUser", Request.ParamsToBody, verifyUser)
router.post(
  "/signin",
  [
    check("email", "mail is required").isEmail(),
    check("password", "password field is required").isLength({ min: 1 })
  ],
  signin
);
// router.post(
//   "/forgetpassword",
//   [
//     check("email", "email is required").isEmail(),
//   ],
//   forgetPassword
// );
// router.post(
//   "/resetPassword",
//   [
//     check("resetPasswordToken", "Password Reset Token Invalid!").isEmail(),
//     check("password", "password field is required").isLength({ min: 8 }),
//     check("newPassword", "new password field is required").isLength({ min: 8 })
//   ],
//   resetPassword
// );

router.get("/signout", signout);

module.exports = router;
