import { getTechStacksApi } from "@/apis/techStacksApis";
import RegisterForm from "@/components/auth/register/RegisterFrom";

const RegisterPage = async () => {
  const allTechStacks = await getTechStacksApi();

  return <RegisterForm allTechStacks={allTechStacks} />;
};

export default RegisterPage;
