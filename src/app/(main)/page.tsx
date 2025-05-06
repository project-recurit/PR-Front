import PostList from "@/components/home/body/PostList";
import Filter from "@/components/home/filterPanel/Filter";
import HomeSearchBar from "@/components/home/filterPanel/HomeSearchBar";
import FloatingButton from "@/components/layout/FloatingButton";

const Home = async () => {
  return (
    <div className="flex flex-col overflow-hidden">
      <div className="bg-white">
        <HomeSearchBar />
        <Filter />
      </div>
      <PostList />
      <FloatingButton />
    </div>
  );
};

export default Home;
