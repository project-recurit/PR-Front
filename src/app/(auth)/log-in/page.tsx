import SocialLogin from "@/components-temp/auth/log-in/SocialLogin";

const LogInPage = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="caption-24-b mt-46">다들모여!</h2>
      <h1 className="caption-40-b mt-86">DAMO</h1>
      <span className="caption-16-r mb-128 mt-12">다들 모여줘서 고마워 😘</span>
      <SocialLogin />
    </div>
  );
};

export default LogInPage;
