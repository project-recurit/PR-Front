"use client";

import { SOCIAL_META } from "@/constants/socialMetas";
import { signIn } from "next-auth/react";

interface SocialLogInButtonProps {
  provider: keyof typeof SOCIAL_META;
}

const SocialLogInButton = ({ provider }: SocialLogInButtonProps) => {
  const { icon: Icon, style, label } = SOCIAL_META[provider];
  return (
    <>
      <button
        onClick={() =>
          signIn(
            provider,
            // { callbackUrl: "/", redirect: false }
          )
        }
        className={`body-16-b flex w-full items-center justify-center rounded-xl px-20 py-8 ${style}`}
      >
        <Icon />
        <span>{label} 로그인</span>
      </button>
    </>
  );
};

export default SocialLogInButton;
