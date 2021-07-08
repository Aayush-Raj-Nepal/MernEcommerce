var admin = require("firebase-admin");

var serviceAccount = require("../library/utilities/subidhaonline-de029-firebase-adminsdk-d5kdu-cd01889f11.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  //   databaseURL: "https://bookstore-1553050674534.firebaseio.com"
});
module.exports = admin;
