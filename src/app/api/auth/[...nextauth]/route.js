import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Kakao from "next-auth/providers/kakao";

const handler = NextAuth({
  providers: [
    Kakao({
      clientId: process.env.KAKAO_CLIENT_ID,
      clientSecret: process.env.KAKAO_CLIENT_SECRET,
    }),
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      accessToken: {
        params: {
          scope: 'openid email profile name'
        }
      }
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      console.log("소셜 로그인 디버그:", { user, account });

      const nickname = user?.name || user?.email?.split('@')[0] || "Unknown";

      try {
        // 로그인 시도
        const response = await fetch(`${process.env.API_BASE_URL}/api/v1/auth/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: user?.email,
            socialId: account.providerAccountId,
            nickname: nickname,
            provider: account.provider.toUpperCase()
          })
        });

        if (response.ok) {
          const data = await response.json();
          account.access_token = data.token;
          return true;
        }
        return false;

        return loginSuccess;

      } catch (error) {
        console.error('🔴 로그인 에러:', error);
        return false;
      }
    },
    async jwt({ token, account }) {
      if (account) {
        token.access_token = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.access_token;
      return session;
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };