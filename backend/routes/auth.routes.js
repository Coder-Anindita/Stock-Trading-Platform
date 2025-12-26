import express from "express";
import {Signup} from "../controllers/Auth.controller.js";
import {Login} from "../controllers/Auth.controller.js"
const router = express.Router();


router.post("/signup", Signup);
router.post("/login",Login)
export default router;
