import type { Request, Response } from "express";
import { getAuth } from "@clerk/express";

export function getCurrentUser(
  req: Request,
  res: Response,
): void {
  const { isAuthenticated, userId } = getAuth(req);

  if (!isAuthenticated || !userId) {
    res.status(401).json({
      success: false,
      message: "Authentication required.",
    });

    return;
  }

  res.status(200).json({
    success: true,
    data: {
      clerkUserId: userId,
    },
  });
}
