import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
        "300": "300%",
      },
    },
  },
  plugins: [typography],
};
export default config;
