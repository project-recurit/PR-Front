"use client";

import { signIn, signOut, useSession } from "next-auth/react";

const Kakao = () => {
  const { data: session } = useSession();

  console.log(session);
  return (
    <div className="flex gap-x-3">
      <button
        onClick={async () => {
          await signIn("kakao", {
            redirect: true,
            callbackUrl: "/",
          });
        }}
      >
        카카오로그인
      </button>
      <button
        onClick={() => {
          signIn("github", {
            redirect: true,
            callbackUrl: "/",
          });
        }}
      >
        깃허브로그인
      </button>
      <button
        onClick={() => {
          signIn("google", {
            redirect: true,
            callbackUrl: "/",
          });
        }}
      >
        구글로그인
      </button>
      <button
        disabled={!session}
        className=" disabled:text-gray-500"
        onClick={() => signOut()}
      >
        로그아웃
      </button>
    </div>
  );
};

export default Kakao;
