import { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, KAKAO_CLIENT_ID, KAKAO_CLIENT_SECRET } from "@/config/env";
import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Kakao from "next-auth/providers/kakao";

// [...nextauth].ts 또는 [...nextauth].js
export const authOptions = {
  providers: [
    Kakao({
      clientId: KAKAO_CLIENT_ID,
      clientSecret: KAKAO_CLIENT_SECRET,
    }),
    Github({
      clientId: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
    }),
    Google({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      accessToken: {
        params: {
          scope: "openid email profile name",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      try {
        const response = await fetch(`${process.env.API_BASE_URL}/api/v1/auth/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: user.email,
            provider: account.provider.toUpperCase(),
            socialId: account.providerAccountId,
            nickname: user.name || user.email.split("@")[0] || "Unknown",
          }),
        });
        const data = await response.json();
        account.access_token = data.accessToken;
        account.status = data.status;
        if (data.status === "USER_INFO_UPDATE") {
          return true;
        } else {
          return true;
        }
      } catch (error) {
        console.error(error);
        return false;
      }
    },
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
        token.status = account.status;
        token.socialId = account.providerAccountId;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.status = token.status;
      session.socialId = token.socialId;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET!,
};

export const GET = (req, res) => NextAuth(req, res, authOptions);
export const POST = (req, res) => NextAuth(req, res, authOptions);
