import { Router } from "express";
import {
  completeLesson,
  getMyProgress,
} from "../controllers/progressController.js";

const router = Router();

router.get("/me", getMyProgress);
router.put("/:lessonSlug/complete", completeLesson);

export default router;
