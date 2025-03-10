import "./globals.css";
import FloatingButton from "@/components/Layout/FloatingButton";
import Header from "@/components/Layout/Header";
import NavigationBar from "@/components/Layout/NavigationBar";
import { CategoryStoreProvider } from "@/providers/CategoryStoreProvider";
import QueryProvider from "@/providers/QueryProvider";
import AuthSession from "@/providers/SessionProvider";
import type { Metadata } from "next";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
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
      className={`trancy-ko ${pretendard.variable} bg-white sm:px-0`}
    >
      <AuthSession>
        <body className={`main-contain h-screen bg-black-100 text-black-1000 antialiased`}>
          <div id="modal-root"></div>
          <QueryProvider>
            <CategoryStoreProvider>
              <Header />
              {children}
              <FloatingButton />
              <NavigationBar />
            </CategoryStoreProvider>
          </QueryProvider>
        </body>
      </AuthSession>
    </html>
  );
};

export default RootLayout;
