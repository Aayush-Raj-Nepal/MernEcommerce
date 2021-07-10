import { Router } from "express";
import { esewaPay } from "../controllers/Payment";
import { Auth, Request } from "../middlewares/index";
let router = Router();
// admin routes
router.get("/esewa/:status", Request.ParamsToBody, esewaPay);

export default router;
