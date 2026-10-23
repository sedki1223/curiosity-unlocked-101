
import type { Request, Response, NextFunction } from "express";
import { getAuth } from "@clerk/express";

export function requireAdmin(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const { isAuthenticated, userId } = getAuth(req);

  if (!isAuthenticated || !userId) {
    res.status(401).json({
      success: false,
      message: "Authentication required.",
    });
    return;
  }

  const adminUserIds = (
    process.env.ADMIN_CLERK_USER_IDS ?? ""
  )
    .split(",")
    .map((id) => id.trim())
    .filter(Boolean);

  if (adminUserIds.length === 0) {
    res.status(503).json({
      success: false,
      message: "Admin access is not configured.",
    });
    return;
  }

  if (!adminUserIds.includes(userId)) {
    res.status(403).json({
      success: false,
      message: "Administrator access required.",
    });
    return;
  }

  next();
}
