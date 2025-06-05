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
        throw new Error("유저 정보를 불러오지 못 했습니다.");
      }

      const logInResponse = await socialLogInApi({ user, account });
      if (logInResponse.status === "USER_INFO_UPDATE" || logInResponse.status === "LOGIN_SUCCESS") {
        user.accessToken = logInResponse.data.accessToken;
        user.status = logInResponse.status;
        return true;
      }

      throw new Error("소셜 로그인에 실패했습니다.");
    },

    async jwt({ token, user, account }) {
      if (user && account) {
        return { ...token, accessToken: user.accessToken, status: user.status, socialId: account.providerAccountId };
      }
      throw new Error("유저 정보를 불러오지 못 했습니다.");
    },

    async session({ session, token }) {
      if (!token) {
        throw new Error("토큰 정보를 불러오지 못 했습니다.");
      }
      return {
        ...session,
        user: { ...session.user, socialId: token.socialId },
        status: token.status,
      };
    },
  },
  secret: NEXTAUTH_SECRET,
});
