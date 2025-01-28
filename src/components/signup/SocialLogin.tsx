"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

const SocialLogin = () => {
    return (
        <div className="flex flex-col space-y-4">
            {/* 구글 로그인 */}
            <button
                onClick={() => signIn("google", { callbackUrl: "/" })}
                className="flex items-center justify-center w-full px-4 py-3 border rounded-lg hover:bg-gray-50"
            >
                <Image
                    src="/icon/google.svg"
                    alt="Google"
                    width={20}
                    height={20}
                    className="mr-2"
                />
                <span>Google 로그인</span>
            </button>

            {/* Github 로그인 */}
            <button
                onClick={() => signIn("github", { callbackUrl: "/" })}
                className="flex items-center justify-center w-full px-4 py-3 bg-[#24292F] text-white rounded-lg hover:bg-[#24292F]/90"
            >
                <Image
                    src="/icon/github.png"
                    alt="Github"
                    width={20}
                    height={20}
                    className="mr-2"
                />
                <span>Github 로그인</span>
            </button>

            {/* Kakao 로그인 */}
            <button
                onClick={() => signIn("kakao", { callbackUrl: "/" })}
                className="flex items-center justify-center w-full px-4 py-3 bg-[#FEE500] rounded-lg hover:bg-[#FEE500]/90"
            >
                <Image
                    src="/icon/kakao.png"
                    alt="Kakao"
                    width={20}
                    height={20}
                    className="mr-2"
                />
                <span>Kakao 로그인</span>
            </button>
        </div>
    );
};

export default SocialLogin;