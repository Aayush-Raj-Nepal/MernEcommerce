import { Router } from "express";
import { Request } from "../middlewares/index";
import {
  addOffer,
  deleteOffer,
  getOfferToEdit,
  getAllOffers,
  getsingleOffer,
  updateOffer,
} from "../controllers/Offer";
import { Auth } from "../middlewares/index";
const { check } = require("express-validator");
let router = Router();

// product routes
router.get("/", Auth.VerifyAdmin, getAllOffers);
router.get("/active", getAllOffers);
router.get("/:id", Request.ParamsToBody, getsingleOffer);
router.put("/", Auth.VerifyAdmin, Request.ParamsToBody, updateOffer);
router.delete("/:id", Auth.VerifyAdmin, Request.ParamsToBody, deleteOffer);

router.get("/edit/:id", Request.ParamsToBody, Auth.VerifyAdmin, getOfferToEdit);
router.get("/single/:id", Request.ParamsToBody, getsingleOffer);
router.post(
  "/",
  [
    check("offer_name", "offer name should be at least 3 char").isLength({
      min: 3,
    }),
    check("title", "title name should be at least 3 char").isLength({
      min: 3,
    }),
    check("sub_title", "sub title name should be at least 3 char").isLength({
      min: 3,
    }),
    check("description", "description is required").isLength({ min: 5 }),
    check("images", "At least One Image Is Required").notEmpty(),
  ],
  Auth.VerifyAdmin,
  addOffer
);

export default router;
