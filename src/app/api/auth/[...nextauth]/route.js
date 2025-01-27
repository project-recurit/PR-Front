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
    }),
  ],
  callbacks: {
  async signIn({ user, account }) {
    console.log(account);
    try {
      // 1. 먼저 로그인 시도
      const loginResponse = await fetch(`${process.env.API_BASE_URL}/api/v1/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: user.email,
          socialId: account.providerAccountId,
          provider: account.provider
        })
      });

      // 2. 로그인 성공
      if (loginResponse.ok) {
        const data = await loginResponse.json();
        account.access_token = data.token;
        return true;
      }

      // 3. 로그인 실패 시 (401 등) 회원가입 진행
      if (loginResponse.status === 401) {
        const registerResponse = await fetch(`${process.env.API_BASE_URL}/api/v1/users/register`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: user.email,
            username: user.email,
            nickname: user.name,
            socialId: account.providerAccountId,
            socialProvider: account.provider
          })
        });

        // 4. 회원가입 실패 처리 (409: 이미 존재하는 회원인 경우)
        if (registerResponse.status === 409) {
          console.log('이미 존재하는 회원, 재로그인 시도');
          return await this.signIn({ user, account }); // 재로그인 시도
        }

        if (!registerResponse.ok) {
          console.error('회원가입 실패');
          return false;
        }

        // 5. 회원가입 성공 후 재로그인
        console.log('회원가입 성공, 재로그인 시도');
        return await this.signIn({ user, account }); // 재로그인 시도
      }

      return false;
    } catch (error) {
      console.error('Error:', error);
      return false;
    }
  },
    async jwt({ token, account }) {
      if (account) {
        token.access_token = account.access_token;
      }
      return token;
    },

    // 세션 콜백: JWT 토큰의 데이터를 세션에 추가
    async session({ session, token }) {
      session.accessToken = token.access_token;
      return session;
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };

