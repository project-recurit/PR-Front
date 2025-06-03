import "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    accessToken: string;
    expires: string;
    socialId: number;
    status: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    access_token?: string;
  }
}
