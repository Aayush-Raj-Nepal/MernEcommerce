const AWS = require("aws-sdk")
require("dotenv").config()
console.log(process.env.AWS_ACCESS_KEY)
console.log(process.env.AWS_SECRET_KEY)
AWS.config.logger = console;
const vultrEndpoint = new AWS.Endpoint("https://ewr1.vultrobjects.com")
module.exports = new AWS.S3({endpoint:vultrEndpoint, accessKeyId: process.env.AWS_ACCESS_KEY, secretAccessKey: process.env.AWS_SECRET_KEY })
