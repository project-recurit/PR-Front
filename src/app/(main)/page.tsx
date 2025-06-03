import { getTechStacksApi } from "@/apis/techStacksApis";
import PostContainer from "@/components/home/PostContainer";
import FloatingButton from "@/components/ui/FloatingButton";

const HomePage = async () => {
  const allTechStacks = await getTechStacksApi();
  return (
    <main className="mb-56 flex flex-col">
      <PostContainer allTechStacks={allTechStacks} />
      <FloatingButton />
    </main>
  );
};

export default HomePage;
