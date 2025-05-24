import PostList from "@/components/home/body/PostList";
import Filter from "@/components/home/filterPanel/Filter";
import HomeSearchBar from "@/components/home/filterPanel/HomeSearchBar";
import FloatingButton from "@/components/ui/FloatingButton";

const HomePage = () => {
  return (
    <main className="flex flex-col mb-56">
      <HomeSearchBar />
      <Filter />
      <PostList />
      <FloatingButton />
    </main>
  );
};

export default HomePage;
