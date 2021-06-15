import {Router} from "express"
import {createCategory,getAllCategories} from "../controllers/Category"
import {Auth,Request} from "../middlewares/index"
const { check, validationResult } = require("express-validator");
let router=Router()
// admin routes
router.get("/",Auth.VerifyAdmin,getAllCategories)
router.post("/",
[
    check("eng_name", "eng name should be at least 3 char").isLength({ min: 4 }),
    check("nep_name", "nep name should be at least 3 char").isLength({ min: 4 }),
    check("description", "name should be at least 3 char").isLength({ min: 4 }),
    check("image"," Image Is Required").notEmpty(),
  ],Auth.VerifyAdmin,Request.ParamsToBody,
  createCategory)
export default router