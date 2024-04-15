import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      "2xl": ["3rem", "1.1"],
      xl: ["2rem", "1.1"],
    },
    extend: {
      fontFamily: {
        icon: ["var(--font-glyphter)"],
      },
      colors: {
        "osc-primary": "#ffed00",
        "osc-gray-500": "#f5f5f5",
        "osc-gray-700": "#737373",
      },
    },
  },
  plugins: [typography],
};
export default config;
