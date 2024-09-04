import { Router } from "express";
import { registerUser, loginUser, logoutUser, checkUser, message } from "../controllers/user.controller.js";

const router = Router()


router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/logout").post(logoutUser)
router.route("/check-auth").get(checkUser)
router.route("/submit-message").post(message)



export default router