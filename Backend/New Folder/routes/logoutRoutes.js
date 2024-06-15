import express from "express";
import { logoutUser } from "../controllers/logoutController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/logout", authMiddleware, logoutUser);

export default router;
