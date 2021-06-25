import Admin from "../models/Admin";
import _ from "lodash";
import bcrypt from "bcrypt";

const { check, validationResult } = require("express-validator");

exports.getAllAdmins = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      error_message: errors.array()[0].msg,
    });
  }
  Admin.find({})
    .then((admins) => {
      //  console.log(admins)
      if (admins.length == 0) {
        res.status(404).json({
          error_message: "Cannot get list of admins",
        });
      } else {
        res.status(200).json(admins);
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({
        error_message: "Cannot get list of admins",
      });
    });
};
exports.addAdmin = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      error_message: errors.array()[0].msg,
    });
  }
  let payload = req.body;
  let admin = new Admin({
    name: payload.name,
    email: payload.email,
    address: payload.address,
    phone: payload.phone,
    image: payload.image,
    access_level: 1,
    // access_level: payload.access_level,
    password_history: [
      {
        key: "String",
        value: bcrypt.hashSync(payload.password, 10),
      },
    ],
  });
  admin.save(function (err, data) {
    if (err) {
      console.log(err);
      res.status(401).json({ error_message: "Something Went Wrong12" });
    }
    res.status(200).json({
      message: "Successfull Admin Created!",
    });
  });
};
exports.deleteAdmin = (req, res) => {
  Admin.findByIdAndDelete(req.body.id, function (err, admin) {
    if (err) {
      console.log(err);
      res.status(404).json({
        error_message: "Cannot find the document",
      });
    } else {
      res.status(200).send(admin);
      console.log("Deleted : ", admin);
    }
  });
};
