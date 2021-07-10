const { response } = require("express");
const User = require("../models/User");

// functions for ui/client
exports.getAllUsers = (req, res) => {
  User.find({})
    .then((users) => {
      return res.status(200).json(users);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({
        error_message: "No users found",
      });
    });
};

exports.verifyPhone = (req, res) => {
  User.findOneAndUpdate(
    { _id: req.body.user._id, phone: req.body.phone },
    {
      verified: true,
      phone: req.body.phone,
    }
  )
    .then((user) => {
      if (user) {
        res.status(200).json({
          message: "user verified",
        });
      } else {
        res.status(400).json({
          error_message: "Error Verifying User Phone",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({
        error_message: "Error Verifying User Phone",
      });
    });
};
exports.editPhoto = (req, res) => {
  User.findByIdAndUpdate(
    { _id: req.body.user._id },
    {
      images: [req.body.photo],
    }
  )
    .then((user) => {
      if (user) {
        res.status(200).json(user.images[0]);
      } else {
        res.status(400).json({
          error_message: "Error Verifying User Phone",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({
        error_message: "Error Verifying User Phone",
      });
    });
};
exports.getUserById = (req, res, next, userId) => {
  User.findById(userId).exec((err, user) => {
    if (err || !user) {
      console.log(err);
      return res.status(400).json({
        error: "No user was found in DB",
      });
    }
    req.profile = user;
    next();
  });
};

// functions for ui/admin admin
exports.deleteUser = (req, res) => {
  User.findByIdAndDelete(req.body.id, function (err, user) {
    if (err) {
      console.log(err);
      res.status(404).json({
        error_message: "Cannot find the document",
      });
    } else {
      res.status(200).send(user);
      console.log("Deleted : ", user);
    }
  });
};
