import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"
import { LanguageProvider } from "@/lib/i18n/context"
import { LanguageToggle } from "@/components/language-toggle"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Wesley LEUNG - Computer Science & AI Engineer",
  description: "Portfolio of Wesley LEUNG, a Computer Science and AI Engineer specializing in LLMs and Robotics.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LanguageProvider>
            <div className="fixed top-4 right-4 z-50 flex items-center">
              <LanguageToggle />
              <ModeToggle />
            </div>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'