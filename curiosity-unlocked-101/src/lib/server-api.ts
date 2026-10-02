import { auth } from "@clerk/nextjs/server";
import type { LessonProgress } from "@/lib/api";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000/api";

export async function getCurrentUserProgress(): Promise<LessonProgress[]> {
  const { isAuthenticated, getToken } = await auth();

  if (!isAuthenticated) {
    return [];
  }

  const token = await getToken();

  if (!token) {
    return [];
  }

  const response = await fetch(`${API_URL}/progress/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch progress: ${response.status}`);
  }

  const result: {
    success: boolean;
    count: number;
    data: LessonProgress[];
  } = await response.json();

  return result.data;
}