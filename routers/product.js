// import ProductController from "../controllers/Product"
import { Router } from "express"
let router=Router()
// let controller=ProductController()

// route starts
router.get("/:id",(req,res)=>{
	res.send("Hey you got the product?")
}
// controller.getSingleProduct.bind(controller)
)

export default router