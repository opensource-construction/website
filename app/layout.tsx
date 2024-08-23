import "./globals.css";
import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Footer, Navbar, Button } from "@opensource-construction/components";
import { corbert, glyphter } from "@/components/src/tokens/fonts";

import logoSvg from "@/public/opensource_construction_logo.svg";

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

const navItems = [
  { name: "Projects", target: "/#projects" },
  { name: "Events", target: "/#events" },
  { name: "Trainings", target: "/trainings" },
  { name: "About us", target: "/#who-is-behind-the-initiative" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${corbert.className} ${glyphter.variable} scroll-smooth selection:bg-primary-500 selection:bg-opacity-70`}
    >
      <body>
        <header>
          <Navbar
            title="opensource.construction"
            logo={logoSvg}
            menuItems={navItems}
          >
            <Button
              type="secondary"
              size="small"
              target="https://answer.opensource.construction"
              label="Knowledge Hub"
            />
          </Navbar>
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
