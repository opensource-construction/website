import "./globals.css";
import localFont from "next/font/local";
import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Footer, Navbar } from "@opensource-construction/components";

export const metadata: Metadata = {
  title: {
    default: "opensource.construction",
    template: "%s | opensource.construction",
  },
  description: "",
  openGraph: {
    title: "opensource.construction",
    description: "",
    url: "https://opensource.construction",
    siteName: "opensource.construction",
    locale: "en",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const corbert = localFont({
  src: [
    {
      path: "./fonts/Corbert-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Corbert-RegularItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Corbert-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Corbert-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  display: "swap",
});

const glyphter = localFont({
  src: "./fonts/Glyphter.woff",
  display: "swap",
  variable: "--font-glyphter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${corbert.className} ${glyphter.variable} scroll-smooth font-bold selection:bg-osc-primary selection:bg-opacity-70`}
    >
      <body>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
