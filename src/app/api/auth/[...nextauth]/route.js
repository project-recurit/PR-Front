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
      console.log('Social Provider:', account.provider);
      console.log('Provider Account:', account);
      console.log('API URL:', process.env.API_BASE_URL);
      try {
        const registerUrl = `${process.env.API_BASE_URL}/api/v1/users/register`;
        console.log('Attempting register at:', registerUrl);
        const response = await fetch(`${process.env.API_BASE_URL}/api/v1/users/register`, {
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

        if (!response.ok) {
          const loginResponse = await fetch(`${process.env.API_BASE_URL}/api/v1/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: user.email,
              socialId: account.providerAccountId,
              provider: account.provider
            })
          });
          if (loginResponse.ok) {
            const data = await loginResponse.json();
            user.accessToken = data.token; // 또는 필요한 토큰/데이터 저장
            return true;
          }
        }
        return true;
      } catch (error) {
        console.error('Error during sign in:', error);
        return false;
      }
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };

