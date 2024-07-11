import express from "express";
import {
  addPost,
  getPost,
  getPosts,
  removePost,
  updatePost,
} from "../controllers/post.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", addPost);
router.delete("/:id", removePost);
router.put("/:id", updatePost);

export default router;
