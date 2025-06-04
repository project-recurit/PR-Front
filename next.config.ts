import fs from "fs";
import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  webpack: (config) => {
    // svg 설정
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });

    const templatePath = path.join(__dirname, "scripts/firebase-messaging-sw.template.js");
    const swPath = path.join(__dirname, "public/firebase-messaging-sw.js");
    let content = fs.readFileSync(templatePath, "utf8");
    // 환경변수 치환
    [
      "NEXT_PUBLIC_FIREBASE_API_KEY",
      "NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN",
      "NEXT_PUBLIC_FIREBASE_PROJECT_ID",
      "NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID",
      "NEXT_PUBLIC_FIREBASE_APP_ID",
      "NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID",
    ].forEach((key) => {
      content = content.replace(new RegExp(key, "g"), process.env[key] || "");
    });
    fs.writeFileSync(swPath, content);
    return config;
  },
};

export default nextConfig;
