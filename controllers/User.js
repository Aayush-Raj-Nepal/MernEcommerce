const User = require("../models/User");

// functions for ui/client
exports.verifyPhone = (req, res) => {
  User.findByIdAndUpdate(
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
