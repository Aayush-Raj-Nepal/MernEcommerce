import { Router } from "express";
import {
  createOrder,
  getAllOrders,
  deleteOrder,
  getSingleOrder,
  updateOrder,
} from "../controllers/Order";
import { Auth, Request } from "../middlewares/index";
const { check, validationResult } = require("express-validator");
let router = Router();
// admin routes
router.get("/", getAllOrders);
router.put("/", Auth.VerifyAdmin, Request.ParamsToBody, updateOrder);
router.get(
  "/single/:id",
  Auth.VerifyAdmin,
  Request.ParamsToBody,
  getSingleOrder
);
router.delete("/:id", Auth.VerifyAdmin, Request.ParamsToBody, deleteOrder);
router.post(
  "/",
  [
    // check("image", " Image Is Required").notEmpty(),
  ],
  Auth.VerifyAccessToken,
  Request.ParamsToBody,
  createOrder
);
export default router;
