import type { Config } from "tailwindcss";
const px0_10 = Array.from(Array(11), (_, i) => [`${i}`, `${i}px`]).reduce(
  (acc, [key, value]) => {
    acc[key] = value;
    return acc;
  },
  {} as { [key: string]: string }
);

const px0_100 = Array.from(Array(101), (_, i) => [`${i}`, `${i}px`]).reduce(
  (acc, [key, value]) => {
    acc[key] = value;
    return acc;
  },
  {} as { [key: string]: string }
);

const px0_200 = Array.from(Array(201), (_, i) => [`${i}`, `${i}px`]).reduce(
  (acc, [key, value]) => {
    acc[key] = value;
    return acc;
  },
  {} as { [key: string]: string }
);
export default {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "391px",
    },
    extend: {
      borderRadius: px0_100,
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
        "black-50": "#FAFAFA",
        "black-100": "#F2F2F2",
        "black-200": "#D9D9D9",
        "black-300": "#BFBFBF",
        "black-400": "#A6A6A6",
        "black-500": "#8C8C8C",
        "black-600": "#737373",
        "black-700": "#595959",
        "black-800": "#404040",
        "black-900": "#262626",
        "black-1000": "#121212",
      },
    },
  },
  plugins: [],
} satisfies Config;
