import { Router } from "express";
import { createComment } from "../controllers/commentControllers.js";

const router = Router();

router.post("/:postId/comments", createComment);

export default router;
