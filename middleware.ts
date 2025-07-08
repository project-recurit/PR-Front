import { auth } from "@/auth";
import ROUTES from "@/constants/routes";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const middleware = async (request: NextRequest) => {
  const session = await auth();

  const isLoggedIn = !!session?.user;

  //TODO - 수정
  const isProtectedPath = request.nextUrl.pathname.startsWith("/protected");

  if (isProtectedPath && !isLoggedIn) {
    const loginUrl = new URL(ROUTES.logIn, request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
};

//TODO - 수정
// 보호할 경로 설정
export const config = {
  matcher: ["/protected/:path*"],
};
