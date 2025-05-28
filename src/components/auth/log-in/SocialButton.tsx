"use client";

import { GithubIcon, GoogleIcon, KakaoIcon } from "@/assets/svgs/icons";
import ROUTES from "@/constants/routes";
import { Session } from "next-auth";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const icons: { [key: string]: React.ElementType } = {
  Kakao: KakaoIcon,
  Google: GoogleIcon,
  Github: GithubIcon,
};

type CustomSession = Session & { status: string };

const SocialButton = ({ title, classname }: { title: string; classname?: string }) => {
  const router = useRouter();
  const { data: session } = useSession();

  // useEffect(() => {
  //   const resirect = async () => {
  //     if (session) {
  //       if ((session as CustomSession).status === "USER_INFO_UPDATE") {
  //         router.replace(ROUTES.register);
  //       } else {
  //         router.replace(ROUTES.home);
  //       }
  //     }
  //   };
  //   resirect();
  // }, [session, router]);

  const handleLogin = async () => {
    await signIn(title.toLowerCase(), { redirect: false });
  };

  const logout = async () => {
    await signOut({ redirect: false });
  };

  const upperTitle = title[0].toUpperCase() + title.slice(1, title.length);
  const Component = icons[upperTitle];

  return (
    <>
      <button onClick={logout}> 로그아웃</button>
      <button
        onClick={handleLogin}
        className={`body-16-b flex w-full items-center justify-center rounded-12 py-12 ${classname}`}
      >
        <Component />
        <span>{upperTitle} 로그인</span>
      </button>
    </>
  );
};

export default SocialButton;
