import {Router} from "express"
import {loginAdmin,logoutAdmin,refreshTokenHandler} from "../controllers/admin.controller.js"
import isAuthenticated from "../middlewares/auth.middle.js"
const router=Router()

router.route("/login").post(loginAdmin)
router.route("/logout").post(isAuthenticated,logoutAdmin)
router.route("/refresh").post(isAuthenticated,refreshTokenHandler)

export default router