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
      console.log("🔵 구글 로그인 디버그:", { user, account });

      const nickname = user?.name || user?.email?.split('@')[0] || "Unknown";

      try {
        // 로그인 시도
        const tryLogin = async () => {
          const response = await fetch(`${process.env.API_BASE_URL}/api/v1/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: user?.email,
              socialId: account.providerAccountId,
              provider: account.provider.toUpperCase()
            })
          });

          if (response.ok) {
            const data = await response.json();
            account.access_token = data.token;
            return true;
          }
          return false;
        };

        // 첫 번째 로그인 시도
        let loginSuccess = await tryLogin();

        // 로그인 실패시 회원가입 진행
        if (!loginSuccess) {
          const registerResponse = await fetch(`${process.env.API_BASE_URL}/api/v1/users/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: user?.email,
              username: user?.email,
              nickname: nickname,
              socialId: account.providerAccountId,
              socialProvider: account.provider.toUpperCase()
            })
          });

          if (registerResponse.ok) {
            // 회원가입 성공 후 다시 로그인 시도
            loginSuccess = await tryLogin();
          }
        }

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