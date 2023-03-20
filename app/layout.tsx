import "./globals.css"
import { Montserrat } from "next/font/google"
import Navbar from "@/components/navbar"

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" })

export const metadata = {
  title: "cgy.dev",
  description: "Portfolio website by Kent Chen from cgy.dev",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1
  }
}

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans bg-light w-full min-h-screen`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
