const User=require('../models/User');


// functions for ui/client

exports.getUserById = (req, res, next, userId) => {
    User.findById(userId).exec((err, user) => {
      if (err || !user) {
        console.log(err)
        return res.status(400).json({
          error: "No user was found in DB"
        });
      }
      req.profile = user;
      next();
    });
};

// functions for ui/admin admin
