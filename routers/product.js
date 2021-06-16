import {Router} from "express"
import {Request} from "../middlewares/index"
import {getLatestProducts,addProduct,deleteProduct, getFeaturedProducts,getAllProducts} from "../controllers/Product"
import {Auth} from "../middlewares/index"
const { check } = require("express-validator");
let router=Router()

// product routesrouter.get("/",getLatestProducts)

router.get("/latest",Auth.VerifyAdmin, getAllProducts)
router.get("/featured",getFeaturedProducts)
router.post("/",
[
    check("eng_name", "eng name should be at least 3 char").isLength({ min: 3 }),
    check("nep_name", "nep name should be at least 3 char").isLength({ min: 3 }),
    check("description", "description is required").isLength({min:5}),
    check("images","Profile Image Is Required").notEmpty(),
  ],
  Auth.VerifyAdmin,
  addProduct)
// router.delete("/:id",Auth.VerifyAdmin,Request.ParamsToBody, deleteProduct)

export default router