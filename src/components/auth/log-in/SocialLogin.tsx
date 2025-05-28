import SocialLogInButton from "./SocialButton";

const SocialLogin = () => {
  return (
    <div className="flex w-full flex-col gap-18 my-74 px-16">
      <SocialLogInButton provider="google" />
      <SocialLogInButton provider="github" />
      <SocialLogInButton provider="kakao" />
    </div>
  );
};

export default SocialLogin;
