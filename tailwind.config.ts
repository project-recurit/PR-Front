import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ["var(--font-pretendard)"],
      },
      colors: {
        background: "#F5F5F5",
        foreground: "var(--foreground)",
        "deep-gray": "#BFBFBF",
        "light-gray": "#D9D9D9",
        "text-gray": "#A6A6A6",
      },
    },
  },
  plugins: [],
} satisfies Config;
