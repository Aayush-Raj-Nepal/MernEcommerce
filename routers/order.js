import { Router } from "express";
import {
  createOrder,
  getAllOrders,
  deleteOrder,
  getSingleOrder,
  getMyOrders,
  getOrderForPayment,
  updateOrder,
} from "../controllers/Order";
import { Auth, Request } from "../middlewares/index";
const { check, validationResult } = require("express-validator");
let router = Router();
// admin routes
router.get("/", Auth.VerifyAdmin, getAllOrders);
router.get("/myorders", Auth.VerifyAccessToken, getMyOrders);
router.get(
  "/forPayment/:id",
  Auth.VerifyAccessToken,
  Request.ParamsToBody,
  getOrderForPayment
);
router.put("/", Auth.VerifyAdmin, Request.ParamsToBody, updateOrder);
router.get(
  "/single/:id",
  Auth.VerifyAdmin,
  Request.ParamsToBody,
  getSingleOrder
);
router.delete("/:id", Auth.VerifyAdmin, Request.ParamsToBody, deleteOrder);
router.post("/", Auth.VerifyAccessToken, Request.ParamsToBody, createOrder);
export default router;
