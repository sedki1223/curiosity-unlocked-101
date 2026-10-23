import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import SiteChrome from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Curiosity Unlocked 101",
  description: "Discover how the world around you actually works.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-white antialiased">
        <ClerkProvider>
          <SiteChrome>{children}</SiteChrome>
        </ClerkProvider>
      </body>
    </html>
  );
}