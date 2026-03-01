import type { Metadata, Viewport } from "next"
import { Space_Grotesk, Source_Code_Pro } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-source-code-pro",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Music Love | theradio.fm",
  description:
    "Your destination for entertainment and ad-free gaming. Enjoy live radio, curated playlists, and ad-free games. Featuring the best South African and Namibian streaming audio.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Music Love",
  },
  openGraph: {
    title: "Music Love | theradio.fm",
    description:
      "Your destination for entertainment, live radio, and ad-free gaming.",
    siteName: "Music Love",
    type: "website",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#0a0a0a",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${sourceCodePro.variable} font-sans`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
