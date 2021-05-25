import {Router} from "express"
// routes start here !
let router=Router()
import ProductRouter from "./product" 

router.use("/product",ProductRouter)

export default router