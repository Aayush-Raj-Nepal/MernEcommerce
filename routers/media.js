import { Router } from "express";
import { getProductImage, createProductImage } from "../controllers/Media";
import { Request, Auth } from "../middlewares/index";
import multer from "../app/multer";
let router = Router();

router.post(
  "/product",
  Auth.VerifyAdmin,
  multer.single("media"),
  createProductImage
);
router.post(
  "/profileimage",
  Auth.VerifyAccessToken,
  multer.single("media"),
  createProductImage
);
router.get("/product/:id", Request.ParamsToBody, getProductImage);
export default router;
