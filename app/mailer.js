const nodeMailer = require("nodemailer");
require("dotenv").config();
const transorter = nodeMailer.createTransport({
  service: "Gmail",
  auth: {
    type: "login",
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
    // clientId: process.env.GOOGLE_CLIENT_ID,
    // clientSecret:process.env.CLIENT_SECRET,
    // refreshToken:'1//04UYBZd8F9Q5BCgYIARAAGAQSNwF-L9Ir0jMS53HzHZX-_ENQowJ2t2--vNNtbz12edxeK6brES9affGs0BHSPU_OmFcwzcad_4Y',
    // accessToken:"ya29.a0AfH6SMAnZ6lLFdbJpQZT4E6lBc4gNGBJz3LoxLcQbAOZamBckcYjD1nx4I6U6vMCinUl5-hYbu0g8NmOMfJ3BLVvLUi9pHlYUy-ekSZmPY5aNFZpx3AGzU525rnJKLO6LlFrRiuw8w13dXnO-55V05ockuWGO2WD77o"
  },
});
console.log(process.env.SMTP_USER);
module.exports = transorter;
