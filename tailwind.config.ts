import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import forms from "@tailwindcss/forms";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "2xl": ["1.9em", "1.14em"],
        "3xl": ["2.8em", "1.14em"],
        "4xl": ["3em", "1.14em"],
      },
      fontFamily: {
        icon: ["var(--font-glyphter)"],
      },
      colors: {
        "osc-primary": "#ffed00",
        "osc-gray-500": "#f5f5f5",
        "osc-gray-700": "#737373",
        "osc-white": "#ffffff",
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
