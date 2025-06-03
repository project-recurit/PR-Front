import PostContainer from "@/components/home/body/PostContainer";
import FloatingButton from "@/components/ui/FloatingButton";

const HomePage = () => {
  return (
    <main className="mb-56 flex flex-col">
      <PostContainer />
      <FloatingButton />
    </main>
  );
};

export default HomePage;
