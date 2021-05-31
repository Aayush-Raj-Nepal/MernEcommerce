import Express from "express"
import cors from "cors"
const app = Express()
const port = 3000
require("dotenv").config()

let listener = app.listen(process.env.PORT || 4000, () => {
	console.log("Listening on port: " + listener.address().port)
})
app.enable("trust proxy")
app.use(Express.json())
app.use(cors())
app.use("/",Express.static("UI/frontend/build"))

app.get('/printHello', (req, res) => {
  res.send('Hello World!')
})


require("./app/mongodb")

// import Router from "./routers"
// app.use("/", Router)