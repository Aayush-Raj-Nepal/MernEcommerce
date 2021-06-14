import {Router} from "express"
import UserRouter from "./user"
import AuthRouter from "./auth"
import ProductRouter from "./product"
import MediaRouter from "./media"
import AdminRouter from "./admin"
import CategoryRouter from "./category"
let router =Router()

router.use("/auth",AuthRouter)
router.use("/admin",AdminRouter)
router.use('/user',UserRouter)
router.use("/media",MediaRouter)
router.use("/product",ProductRouter)
router.use("/category",CategoryRouter)
router.get("*",(req,res)=>res.send("Invalid requist , Page not found 404"))
export default router