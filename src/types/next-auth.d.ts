import "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    expires: string;
    status: string;
  }
  interface User {
    socialId: string;
    accessToken: string;
    status: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken: string;
    status: string;
    socialId: string;
  }
}
