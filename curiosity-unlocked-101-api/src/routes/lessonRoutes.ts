import { Router } from "express";
import {
  checkQuizAnswer,
  getLessonBySlug,
  getLessons,
} from "../controllers/lessonController.js";

const router = Router();

router.get("/", getLessons);
router.post("/:slug/quiz/check", checkQuizAnswer);
router.get("/:slug", getLessonBySlug);

export default router;