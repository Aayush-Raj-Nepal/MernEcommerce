import { Router } from "express";
import {
  createDL,
  getAllDLs,
  deleteDL,
  getSingleDL,
  updateDL,
} from "../controllers/DeliveryLocation";
import { Auth, Request } from "../middlewares/index";
const { check, validationResult } = require("express-validator");
let router = Router();
// admin routes
router.get("/", getAllDLs);
router.put("/", Auth.VerifyAdmin, Request.ParamsToBody, updateDL);
router.get("/single/:id", Auth.VerifyAdmin, Request.ParamsToBody, getSingleDL);
router.delete("/:id", Auth.VerifyAdmin, Request.ParamsToBody, deleteDL);
router.post(
  "/",
  [
    check("name", "eng name should be at least 3 char").isLength({
      min: 4,
    }),
    check("price", "Price is required").isLength({
      min: 1,
    }),
  ],
  Auth.VerifyAdmin,
  Request.ParamsToBody,
  createDL
);
export default router;
