"use client";

import SocialButton from "./SocialButton";

const SocialLogin = () => {
  return (
    <div className="flex w-full flex-col gap-y-18">
      <SocialButton
        title="google"
        classname="border-1 border-black-200 "
      />
      <SocialButton
        title="github"
        classname="bg-[#231E18] text-white"
      />
      <SocialButton
        title="kakao"
        classname="bg-[#FFEB3B] "
      />
    </div>
  );
};

export default SocialLogin;
