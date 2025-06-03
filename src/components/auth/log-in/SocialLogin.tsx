import SocialLogInButton from "./SocialButton";

const SocialLogin = () => {
  return (
    <div className="my-74 flex w-full flex-col gap-18 px-16">
      <SocialLogInButton provider="google" />
      <SocialLogInButton provider="github" />
      <SocialLogInButton provider="kakao" />
    </div>
  );
};

export default SocialLogin;
