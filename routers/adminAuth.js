var express = require("express");
var router = express.Router();
const { check, validationResult } = require("express-validator");
const { adminSignout, adminSignin} = require("../controllers/Auth");


// admin

router.post(
  "/login",
  [
    check("email", "email is required").isEmail(),
    check("password", "password field is required").isLength({ min: 1 })
  ],
  (req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        error: errors.array()[0].msg
      });
    }
    next()
  }
  ,adminSignin
);

router.get("/signout", adminSignout);

module.exports = router;
