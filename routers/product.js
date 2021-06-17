import {Router} from "express"
import {Request} from "../middlewares/index"
import {getLatestProducts,addProduct,deleteProduct,getProductToEdit, getFeaturedProducts,getAllProducts} from "../controllers/Product"
import {Auth} from "../middlewares/index"
const { check } = require("express-validator");
let router=Router()

<<<<<<< HEAD
// product routesrouter.get("/",getLatestProducts)

router.get("/latest", getAllProducts)
=======
// product routes
router.get("/",Auth.VerifyAdmin, getAllProducts)
router.get("/latest", getLatestProducts)
router.delete("/:id",Auth.VerifyAdmin,Request.ParamsToBody, deleteProduct)
>>>>>>> 33e53a09d8d16f7b94d5452a97116d6211006f4f
router.get("/featured",getFeaturedProducts)
router.get("/edit/:id",Request.ParamsToBody,Auth.VerifyAdmin, getProductToEdit)
router.post("/",
[
    check("eng_name", "eng name should be at least 3 char").isLength({ min: 3 }),
    check("nep_name", "nep name should be at least 3 char").isLength({ min: 3 }),
    check("description", "description is required").isLength({min:5}),
    check("images","Profile Image Is Required").notEmpty(),
  ],
  Auth.VerifyAdmin,
  addProduct)

export default router