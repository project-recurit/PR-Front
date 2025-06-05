import { getTechStacksApi } from "@/apis/techStacksApis";
import { auth } from "@/auth";
import ContextProvider from "@/providers/ContextProvider";
import QueryProvider from "@/providers/QueryProvider";
import AuthSession from "@/providers/SessionProvider";
import { ZustandStoreProvider } from "@/providers/ZustandStoreProvider";
import "@/styles/globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";

//TODO - 수정
export const metadata: Metadata = {
  title: "DAMO",
  description: "프로젝트 구하기",
  keywords: ["DAMO", "다모", "프로젝트", "구인"],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    // url: 'https://snaproad.co.kr',
    siteName: "DAMO",
    title: "다모",
    description: "프로젝트 구하기",
    // images: 'https://www.snaproad.co.kr/images/ogImage/og_image.jpg',
  },
  icons: {
    // icon: '/favicon.ico',
  },
  // manifest: '/manifest.ts',
};

interface RootLayoutProps {
  children: Readonly<ReactNode>;
}

const RootLayout = async ({ children }: RootLayoutProps) => {
  const [session, allTechStacks] = await Promise.all([auth(), getTechStacksApi()]);
  console.log("[㏒] RootLayout session =>", session);

  return (
    <html lang="ko">
      <body>
        <AuthSession session={session}>
          <ZustandStoreProvider>
            <ContextProvider allStacks={allTechStacks}>
              <QueryProvider>
                <div id="modal-root"></div>
                {children}
              </QueryProvider>
            </ContextProvider>
          </ZustandStoreProvider>
        </AuthSession>
      </body>
    </html>
  );
};

export default RootLayout;
