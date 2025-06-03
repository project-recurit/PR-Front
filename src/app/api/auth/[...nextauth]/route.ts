import { socialLogInApi } from "@/apis/authApis";
import {
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  KAKAO_CLIENT_ID,
  KAKAO_CLIENT_SECRET,
  NEXTAUTH_SECRET,
} from "@/config/env";
import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import KakaoProvider from "next-auth/providers/kakao";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
    }),
    KakaoProvider({
      clientId: KAKAO_CLIENT_ID,
      clientSecret: KAKAO_CLIENT_SECRET,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ user, account }) {
      if (!user || !account) {
        return false;
      }

      const data = await socialLogInApi({ user, account });
      if (data.status === "USER_INFO_UPDATE" || data.status === "LOGIN_SUCCESS") {
        account.access_token = data.data.accessToken;
        account.status = data.status;
        return true;
      }

      return false;
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
  secret: NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
