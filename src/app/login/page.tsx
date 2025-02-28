import SocialLogin from "./components/SocialLogin";

const page = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-white px-16 pb-40">
      <p className="font-pretendard text-40 font-bold">LOGO</p>
      <div className="mb-188 mt-94 text-center">
        <p className="title-24-b">환영합니다!</p>
        <p className="body-16-r mt-18">사이드 프로젝트를 찾는 가장 쉬운 방법!</p>
      </div>

      <SocialLogin />
    </div>
  );
};

export default page;
