import { Metadata, Viewport } from "next"
import { ReactNode } from "react"

import { ScreenSizeIndicator } from "@/components/screen-size-indicator"
import { Toaster } from "@/components/ui/toaster"

import { siteConfig } from "@/config/config"

import { cn } from "@/lib/utils"

import { fontNunito } from "@/styles/fonts"
import "@/styles/global.css"

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" }
  ]
}

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`
  },
  icons: {
    icon: "/favicon.ico"
  }
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html suppressHydrationWarning>
      <head />
      <body className={cn("bg-dot-woovi-green-900/5 min-h-screen", fontNunito)}>
        {children}
        <ScreenSizeIndicator />
        <Toaster />
      </body>
    </html>
  )
}
