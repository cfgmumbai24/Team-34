import express from "express";
import { getBlogs, createBlog, updateBlog, deleteBlog } from "../controllers/blogController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/blogs", authMiddleware, getBlogs);
router.post("/blogs", authMiddleware, createBlog);
router.put("/blogs", authMiddleware, updateBlog);
router.delete("/blogs", authMiddleware, deleteBlog);

export default router;
