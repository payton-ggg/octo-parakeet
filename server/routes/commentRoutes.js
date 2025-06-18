import { Router } from "express";
import { createComment } from "../controllers/commentController";

const router = Router();

router.post("/:postId/comments", createComment);

export default router;
