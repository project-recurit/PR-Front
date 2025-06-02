import { getTeckStacksApi } from "@/apis/techStacksApis";
import RegisterForm from "@/components/auth/register/RegisterFrom";

const RegisterPage = async () => {
  const allTechStacks = await getTeckStacksApi();
  console.log("[㏒] allTechStacks =>", allTechStacks);

  return (
    <div className="flex items-center justify-center w-full h-full px-16 bg-white">
      <RegisterForm allTechStacks={allTechStacks} />
    </div>
  );
};

export default RegisterPage;
