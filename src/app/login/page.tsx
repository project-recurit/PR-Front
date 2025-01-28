import SocialLogin from "@/components/signup/SocialLogin";

const LoginPage = () => {
  return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-md space-y-8">
          {/* 로고 */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold">LOGO</h1>
          </div>

          {/* 환영 메시지 */}
          <div className="text-center space-y-2 mb-16">
            <h2 className="text-2xl font-bold">환영합니다!</h2>
            <p className="text-gray-600">
              사이드 프로젝트를 찾는 가장 쉬운 방법!
            </p>
          </div>

          {/* 소셜 로그인 컴포넌트 */}
          <SocialLogin />
        </div>
      </div>
  );
};

export default LoginPage;