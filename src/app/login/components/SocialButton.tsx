"use client";

import { GithubIcon, GoogleIcon, KakaoIcon } from "@/assets/icons";
import { signIn } from "next-auth/react";

const icons: { [key: string]: React.ElementType } = {
  Kakao: KakaoIcon,
  Google: GoogleIcon,
  Github: GithubIcon,
};

const SocialButton = ({ title, classname }: { title: string; classname?: string }) => {
  const upperTitle = title[0].toUpperCase() + title.slice(1, title.length);
  const Component = icons[upperTitle];

  return (
    <button
      onClick={() => signIn(title)}
      className={`body-16-b flex w-full items-center justify-center rounded-12 py-12 ${classname}`}
    >
      <Component />
      <span>{upperTitle} 로그인</span>
    </button>
  );
};

export default SocialButton;
