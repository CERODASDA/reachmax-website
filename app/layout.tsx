"use client";

import type React from "react"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { ConvexProvider, ConvexReactClient } from "convex/react"
import WidgetContainer from "@/components/WidgetContainer"
import "./globals.css"

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL || "");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          themes={['light', 'dark', 'cafe']}
          disableTransitionOnChange={false}
          storageKey="reachmax-theme"
        >
          <ConvexProvider client={convex}>
            <Suspense fallback={null}>{children}</Suspense>
            <WidgetContainer />
            <Analytics />
          </ConvexProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
