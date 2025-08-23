import type React from "react";
import type { Metadata } from "next";
import { Work_Sans, Open_Sans } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
})

export const metadata: Metadata = {
  title: "Dominion Renewables - Solar Water Pumping & Energy Systems",
  description:
    "Professional solar-powered water pumping systems, tank tower installations, solar CCTV, lighting systems, and nationwide repair services. Get your free quote today!",
  generator: "v0.app",
  keywords:
    "solar water pumping, borehole pump installation, tank tower, solar CCTV systems, solar lighting, solar panel installation, water pumping systems, solar energy solutions, renewable energy, water management",
  authors: [{ name: "Dominion Renewables" }],
  creator: "Dominion Renewables",
  publisher: "Dominion Renewables",
  robots: "index, follow",
  openGraph: {
    title: "Dominion Renewables - Solar Water Pumping & Energy Systems",
    description:
      "Professional solar-powered water pumping systems, tank tower installations, solar CCTV, lighting systems, and nationwide repair services.",
    type: "website",
    locale: "en_US",
    siteName: "Dominion Renewables",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dominion Renewables - Solar Water Pumping & Energy Systems",
    description:
      "Professional solar-powered water pumping systems, tank tower installations, solar CCTV, lighting systems, and nationwide repair services.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${workSans.variable} ${openSans.variable} antialiased`} suppressHydrationWarning>
      <head>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
      </head>
      <body className="font-serif">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
