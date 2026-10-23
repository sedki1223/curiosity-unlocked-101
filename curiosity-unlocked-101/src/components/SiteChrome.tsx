"use client";

import { usePathname } from "next/navigation";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";

export default function SiteChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdmin = pathname === "/admin" || pathname.startsWith("/admin/");

  return (
    <>
      {!isAdmin && <SiteHeader />}
      <main>{children}</main>
      {!isAdmin && <SiteFooter />}
    </>
  );
}