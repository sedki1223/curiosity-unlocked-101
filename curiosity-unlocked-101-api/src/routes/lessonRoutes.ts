
import { Router } from "express";
import {
  checkQuizAnswer,
  getLessonBySlug,
  getLessons,
} from "../controllers/lessonController.js";
import {
  adminCreateLesson,
  adminDeleteLesson,
  adminGetLessons,
  adminUpdateLesson,
} from "../controllers/adminLessonController.js";
import { requireAdmin } from "../middleware/requireAdmin.js";

const router = Router();

// Admin routes — register before the dynamic /:slug route.
router.get("/admin", requireAdmin, adminGetLessons);
router.post("/admin", requireAdmin, adminCreateLesson);
router.put("/admin/:id", requireAdmin, adminUpdateLesson);
router.delete("/admin/:id", requireAdmin, adminDeleteLesson);

// Existing public lesson routes.
router.get("/", getLessons);
router.post("/:slug/quiz/check", checkQuizAnswer);
router.get("/:slug", getLessonBySlug);

export default router;
