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
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Kakao from "next-auth/providers/kakao";

export const {
  handlers,
  auth,
  signIn,
  signOut,
  unstable_update: update,
} = NextAuth({
  providers: [
    Google({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
    GitHub({
      clientId: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
    }),
    Kakao({
      clientId: KAKAO_CLIENT_ID,
      clientSecret: KAKAO_CLIENT_SECRET,
    }),
  ],
  session: { strategy: "jwt" },
  callbacks: {
    async signIn({ user, account }) {
      if (!user || !account) {
        return false;
      }

      const data = await socialLogInApi({ user, account });
      if (data.status === "USER_INFO_UPDATE" || data.status === "LOGIN_SUCCESS") {
        user.accessToken = data.data.accessToken as string;
        user.status = data.status as string;
        return true;
      }

      return false;
    },
    async jwt({ token, user, account }) {
      if (user && account) {
        return { ...token, accessToken: user.accessToken, status: user.status, socialId: account.providerAccountId };
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: { ...session.user, socialId: token.socialId as string },
        status: token.status as string,
      };
    },
  },
  secret: NEXTAUTH_SECRET,
});
