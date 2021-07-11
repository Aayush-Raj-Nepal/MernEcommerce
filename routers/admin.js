import { Router } from "express";
import { Request } from "../middlewares/index";
import {
  getAllAdmins,
  addAdmin,
  deleteAdmin,
  getDashboardStatus,
} from "../controllers/Admin";
import { Auth } from "../middlewares/index";
const { check, validationResult } = require("express-validator");
let router = Router();

// admin routes
router.get("/", Auth.VerifyAdmin, getAllAdmins);
router.get("/dashboard", Auth.VerifyAdmin, getDashboardStatus);
router.post(
  "/",
  [
    check("name", "name should be at least 3 char").isLength({ min: 3 }),
    check("email", "email is required").isEmail(),
    check("password", "password should be at least 3 char").isLength({
      min: 3,
    }),
    check("phone", "correct phone number is required").isLength({
      min: 10,
      max: 10,
    }),
    check("address", "correct address is required").isLength({ min: 3 }),
    check("image", "Profile Image Is Required").notEmpty(),
  ],
  Auth.VerifyAdmin,
  addAdmin
);
router.delete("/:id", Auth.VerifyAdmin, Request.ParamsToBody, deleteAdmin);

export default router;
