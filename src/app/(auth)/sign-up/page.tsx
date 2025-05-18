import { fetchTechStacks } from "@/actions/techStacksActions";
import StepPage from "@/components/auth/sign-up/StepPage";

const page = async () => {
  const techStacks = await fetchTechStacks();
  return (
    <div className="flex items-center justify-center w-full h-full px-16 bg-white">
      <StepPage techStacks={techStacks} />
    </div>
  );
};

export default page;
