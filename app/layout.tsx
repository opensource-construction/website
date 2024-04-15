import type { Metadata } from "next";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

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
    <html lang="en">
      <body>
        <header></header>
        <main>{children}</main>
        <footer></footer>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
