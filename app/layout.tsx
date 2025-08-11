import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Cristian Ogena - Cybersecurity Portfolio",
  description:
    "BSCS Student | Aspiring Cybersecurity Specialist - Portfolio showcasing projects, skills, and achievements in cybersecurity, ethical hacking, and penetration testing.",
  keywords: [
    "cybersecurity",
    "computer science",
    "portfolio",
    "ethical hacking",
    "penetration testing",
    "BSCS",
    "network security",
    "CTF",
    "TryHackMe",
    "HackTheBox",
  ],
  authors: [{ name: "Cristian Ogena" }],
  creator: "Cristian Ogena",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-portfolio-url.com",
    title: "Cristian Ogena - Cybersecurity Portfolio",
    description: "BSCS Student | Aspiring Cybersecurity Specialist",
    siteName: "Cristian Ogena Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cristian Ogena - Cybersecurity Portfolio",
    description: "BSCS Student | Aspiring Cybersecurity Specialist",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.className}>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
