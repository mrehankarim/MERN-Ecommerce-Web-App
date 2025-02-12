import { Router } from "express";
import  isAuthenticated  from "../middlewares/auth.middle.js";
import { FetchProductByCategory,PostProduct } from "../controllers/product.controller.js";
const router=Router()
import {upload} from "../middlewares/multer.middleware.js"

router.route("/products").get(FetchProductByCategory)
router.route("/post").post(isAuthenticated,upload.single("image"),PostProduct)
export default router