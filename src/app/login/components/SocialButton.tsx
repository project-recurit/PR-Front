"use client";

import { GithubIcon, GoogleIcon, KakaoIcon } from "@/assets/icons";
import { signIn } from "next-auth/react";

const icons: { [key: string]: React.ElementType } = {
  Kakao: KakaoIcon,
  Google: GoogleIcon,
  Github: GithubIcon,
};

const SocialButton = ({
  title,
  classname,
}: {
  title: string;
  classname?: string;
}) => {
  const upperTitle = title[0].toUpperCase() + title.slice(1, title.length);
  const Component = icons[upperTitle];

  return (
    <button
      onClick={() => signIn(title)}
      className={`flex items-center justify-center w-full py-12 rounded-12 body-16-b  ${classname}`}
    >
      <Component />
      <span>{upperTitle} 로그인</span>
    </button>
  );
};

export default SocialButton;
