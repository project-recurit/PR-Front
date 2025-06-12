import { auth } from "@/auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const middleware = async (request: NextRequest) => {
  const session = await auth();

  const isLoggedIn = !!session?.user;

  const isProtectedPath = request.nextUrl.pathname.startsWith("/protected");

  if (isProtectedPath && !isLoggedIn) {
    const loginUrl = new URL("/api/auth/signin", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
};

// 보호할 경로 설정
export const config = {
  matcher: ["/protected/:path*"],
};
