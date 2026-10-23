
import { Router } from "express";
import {
  createReview,
  getReviews,
} from "../controllers/reviewController.js";
import { requireAdmin } from "../middleware/requireAdmin.js";

const router = Router();

router.get("/", requireAdmin, getReviews);
router.post("/", createReview);

export default router;
