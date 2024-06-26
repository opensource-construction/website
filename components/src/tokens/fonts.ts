import localFont from "next/font/local";

/**
 * Represents the Corbert font.
 */
export const corbert = localFont({
  src: [
    {
      path: "../../../public/fonts/Corbert-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Corbert-RegularItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../../public/fonts/Corbert-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Corbert-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-corbert",
  display: "swap",
});

export const glyphter = localFont({
  src: "../../../public/fonts/Glyphter.woff",
  display: "swap",
  variable: "--font-glyphter",
});
