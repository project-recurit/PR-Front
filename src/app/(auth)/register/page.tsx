import { fetchTechStacks } from "@/actions/techStacksActions";
import StepPage from "@/components/auth/register/StepPage";

const RegisterPage = async () => {
  const techStacks = await fetchTechStacks();
  console.log(' techStacks => ', techStacks);
  return (
    <div className="flex items-center justify-center w-full h-full px-16 bg-white">
      <StepPage techStacks={techStacks} />
    </div>
  );
};

export default RegisterPage;
