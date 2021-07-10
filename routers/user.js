import { Router } from "express";
import {
  verifyPhone,
  editPhoto,
  getAllUsers,
  deleteUser,
} from "../controllers/User";
import { Auth, Request } from "../middlewares/index";
const { check, validationResult } = require("express-validator");
let router = Router();

router.get("/", Request.ParamsToBody, Auth.VerifyAdmin, getAllUsers);
router.put(
  "/verifyPhone",
  Auth.VerifyAccessToken,
  Request.ParamsToBody,
  verifyPhone
);

router.put(
  "/profileimage",
  [check("photo", "photo is required").isLength({ min: 3 })],
  Auth.VerifyAccessToken,
  Request.ParamsToBody,
  editPhoto
);
router.get("/", (req, res) => {
  res.send("Hi from user!");
});
router.delete("/:id", Auth.VerifyAdmin, Request.ParamsToBody, deleteUser);

export default router;
