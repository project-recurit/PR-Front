import { getTeckStacksApi } from "@/apis/techStacksApis";
import RegisterForm from "@/components/auth/register/RegisterFrom";

const RegisterPage = async () => {
  const allTechStacks = (await getTeckStacksApi()) || [
    { name: "리액트", id: 1 },
    { name: "자바스크립트", id: 2 },
  ];

  return (
    <div className="flex h-full w-full items-center justify-center bg-white px-16">
      <RegisterForm allTechStacks={allTechStacks} />
    </div>
  );
};

export default RegisterPage;
