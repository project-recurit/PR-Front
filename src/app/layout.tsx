import QueryProvider from "@/providers/QueryProvider";
import AuthSession from "@/providers/SessionProvider";
import { ZustandStoreProvider } from "@/providers/ZustandStoreProvider";
import "@/styles/globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

//TODO - 수정
export const metadata: Metadata = {
  title: 'DAMO',
  description: '프로젝트 구하기',
  keywords: ['DAMO', '다모', '프로젝트', '구인'],
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://snaproad.co.kr',
    siteName: 'Snap Road',
    title: '다모',
    description: '프로젝트 구하기',
    images: 'https://www.snaproad.co.kr/images/ogImage/og_image.jpg',
  },
  icons: {
    icon: '/favicon.ico',
  },
  manifest: '/manifest.ts',
};

const pretendard = localFont({
  src: "../assets/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html
      lang="ko"
      className={`${pretendard.variable} bg-white sm:px-0`}
    >
      <body className={`main-contain h-screen bg-black-100 text-black-1000 antialiased`}>
        <AuthSession>
          <QueryProvider>
            <ZustandStoreProvider>
              <div id="modal-root"></div>
              {children}
            </ZustandStoreProvider>
          </QueryProvider>
        </AuthSession>
      </body>
    </html>
  );
};

export default RootLayout;
