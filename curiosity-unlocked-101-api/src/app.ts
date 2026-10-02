import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { clerkMiddleware } from "@clerk/express";
import authRoutes from "./routes/authRoutes.js";
import lessonRoutes from "./routes/lessonRoutes.js";
import progressRoutes from "./routes/progressRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";
import {
  errorHandler,
  notFoundHandler,
} from "./middleware/errorHandler.js";

dotenv.config();

const app = express();

app.disable("x-powered-by");

app.use(clerkMiddleware());

app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
    credentials: true,
  }),
);

app.use(
  express.json({
    limit: "1mb",
  }),
);

app.get("/api/health", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "CU101 API is running.",
  });
});

app.use("/api/lessons", lessonRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/progress", progressRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;