import type { Config } from "tailwindcss";
const px0_10 = { ...Array.from(Array(11)).map((_, i) => `${i}px`) };
const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) };
const px0_200 = { ...Array.from(Array(201)).map((_, i) => `${i}px`) };

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderWidth: px0_10,
      fontSize: px0_100,
      lineHeight: px0_100,
      minWidth: px0_200,
      minHeight: px0_200,
      spacing: px0_200,
      margin: px0_100,
      padding: px0_100,
      gap: px0_10,
      width: px0_200,
      height: px0_200,
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
