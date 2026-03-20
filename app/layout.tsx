"use client";

import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { usePathname } from "next/navigation";

import { ThemeProvider } from "@/app/components/ThemeProvider";
import Navigation from "@/app/components/Navigation";

// Note: metadata can't be exported from client components
// You'll need to move this to a separate file or use generateMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <html 
      lang="en" 
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="w-full bg-contrast text-primary antialiased m-0 p-0">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navigation />
          {/* Conditional layout */}
          {isHomePage ? (
            // Homepage - full width
            <main className="w-full min-h-screen">
              {children}
            </main>
          ) : (
            // Other pages - constrained width
            <div className="mx-auto max-w-[700px] px-6 pb-24 pt-16 md:px-6 md:pb-44 md:pt-20">
              {children}
            </div>
          )}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}