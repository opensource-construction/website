import "./globals.css";
import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Footer, Navbar } from "@opensource-construction/components";
import { corbert, glyphter } from "@/components/src/tokens/fonts";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${corbert.className} ${glyphter.variable} selection:bg-primary-500 scroll-smooth selection:bg-opacity-70`}
    >
      <body>
        <header>
          <Navbar />
        </header>
        <main className="relative overflow-hidden">{children}</main>
        <footer>
          <Footer />
        </footer>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
