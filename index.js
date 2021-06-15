require("dotenv").config()
import Express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import bodyParser from "body-parser"
import Router from "./routers"
const app = Express()

// listener
const port = 4000
let listener = app.listen(process.env.PORT || 4000, () => {
	console.log("Listening on port: " + listener.address().port)
	
})
// Database connection
require("./app/mongodb")

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(Express.json())
app.use(cookieParser());
app.use(cors());
app.enable("trust proxy")


// routers
app.use(Express.json())
app.use(cors())
app.use("/cpanel",Express.static("UI/admin/build"))
app.use("/",Express.static("UI/client/build"))
app.use("/api",Router)


