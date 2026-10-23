
import { auth } from "@clerk/nextjs/server";
import { notFound, redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = await auth();

  if (!userId) {
    redirect("/");
  }

  const adminIds = (process.env.ADMIN_CLERK_USER_IDS ?? "")
    .split(",")
    .map((id) => id.trim())
    .filter(Boolean);

  if (!adminIds.length || !adminIds.includes(userId)) {
    notFound();
  }

  return <>{children}</>;
}
