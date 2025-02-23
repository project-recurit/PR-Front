import SocialLogin from "./components/SocialLogin";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full px-16 bg-white">
      <p className="font-bold font-pretendard text-40 ">LOGO</p>
      <div className="text-center mt-94 mb-188">
        <p className="title-24-b">환영합니다!</p>
        <p className="body-16-r mt-18">
          사이드 프로젝트를 찾는 가장 쉬운 방법!
        </p>
      </div>

      <SocialLogin />
    </div>
  );
};

export default page;
