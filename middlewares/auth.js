import User from "../models/User";
import Admin from "../models/Admin";
import Product from "../models/Product";
import TokenFactory from "../library/factories/token";
import Sender from "./../library/utilities/helper";
const ObjectId = require("mongoose").Types.ObjectId;
export default {
  VerifyAccessToken(req, res, next) {
    let token = req.header("Authorization");
    console.log(token);
    let now = new Date(Date.now());
    User.findOneAndUpdate(
      {
        tokens: {
          $elemMatch: {
            token: token,
            expiry: {
              $gt: now,
            },
          },
        },
      },
      {
        $set: {
          last_active: Date.now(),
        },
      }
    )
      .then(function (user) {
        if (!user) {
          res.status(403).json({
            message: "Access Token Expired or Not Provided",
          });
        } else {
          req.body.user = user;
          next();
        }
      })
      .catch(function (err) {
        res.status(500).json({
          message: "It's not you. It's us",
          err: err,
        });
      });
  },

  VerifyAdmin(req, res, next) {
    let token = req.header("Authorization");
    let now = new Date(Date.now());
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
          });
        } else {
          req.body.admin = user;
          next();
        }
      })
      .catch(function (err) {
        res.status(500).json({
          message: "It's not you. It's us",
          err: err,
        });
      });
  },

  VerifyProductExistence(req, res, next) {
    if (ObjectId.isValid(req.body.id)) {
      Product.findById(req.body.id).then((d) => {
        if (d != null) {
          req.body.product = d;
          next();
        } else {
          res.status(404).json({
            message: "Product Not Found",
            code: 10,
          });
        }
      });
    }
  },

  VerifyOperationAuthority(req, res, next) {
    if (req.body.admin.access_level > 0 && req.body.admin.access_level <= 3) {
      next();
    } else {
      if (req.body.book.created_by == req.body.admin._id) {
        next();
      } else {
        res.status(403).json({
          message: "Permission Denied",
          code: 10,
        });
      }
    }
  },
  CheckUserAlreadyUsedEmail(req, res, next) {
    switch (req.body.payload.type) {
      case "social":
        // eslint-disable-next-line no-case-declarations
        let token = TokenFactory.produceToken();
        console.log(token);
        User.findOne({ email: req.body.payload.email })
          .then((user) => {
            if (user != null) {
              user.tokens = [];
              user.tokens.push(token);
              user.save((err) => {
                if (err) throw err;
                else {
                  res.status(200).json([
                    {
                      account_balance: user.account_balance,
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
                      phone_number_verified: user.phone_number_verified,
                    },
                  ]);
                }
              });
            } else {
              next();
            }
          })
          .catch(() => {
            res.status(403).json({
              message: "Something Went Wrong",
            });
          });
        break;
      default:
        User.findOne({ email: req.body.payload.email }).then((user) => {
          if (user != null && user.verified) {
            res.status(403).json({
              message: "User already exists with this email.",
            });
          } else if (user != null && !user.verified) {
            Sender.SendEmailVerificationMail(user._id, user.email);
            res.status(200).json({
              message: "Please verify your email First.",
            });
          } else {
            next();
          }
        });
    }
  },
};
