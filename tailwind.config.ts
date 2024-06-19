import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import forms from "@tailwindcss/forms";
import {
  colors,
  white,
  black,
  currentColor,
  transparent,
} from "./components/src/tokens/colors";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      ...colors,
      white,
      black,
      transparent,
      currentColor,
    },
    extend: {
      fontSize: {
        "2xl": ["1.9em", "1.14em"],
        "3xl": ["2.8em", "1.14em"],
        "4xl": ["3em", "1.14em"],
      },
      fontFamily: {
        sans: ["var(--font-corbert)", "sans-serif"],
        icon: ["var(--font-glyphter)"],
      },
      width: {
        "122": "122%",
        "300": "300%",
      },
    },
  },
  plugins: [typography, forms],
};
export default config;
