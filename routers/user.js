import { Router } from "express";
import { verifyPhone } from "../controllers/User";
import { Auth, Request } from "../middlewares/index";
const { check, validationResult } = require("express-validator");
let router = Router();

router.put(
  "/verifyPhone",
  Auth.VerifyAccessToken,
  Request.ParamsToBody,
  verifyPhone
);
router.get("/", (req, res) => {
  res.send("Hi from user!");
});
export default router;
