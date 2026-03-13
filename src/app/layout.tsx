import type { Metadata } from "next"
import { Bebas_Neue, Inter, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Providers } from "@/components/Providers"

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Suryaa — Product Designer",
  description:
    "Product Designer & Design Engineer. I design products people actually want to use — then build them.",
  openGraph: {
    title: "Suryaa — Product Designer",
    description: "Product Design, AI Systems, Design Engineering",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${bebasNeue.variable} ${inter.variable} ${geistMono.variable}`}
    >
      <body className="bg-bg text-text font-sans antialiased overflow-x-hidden">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
