import "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    expires: string;
    status: string;
  }
  interface User {
    status: string;
    socialId: string;
    accessToken: string;
    refreshToken: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken: string;
    status: string;
    socialId: string;
  }
}
