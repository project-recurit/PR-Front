import FloatingButton from "@/components/common/layout/FloatingButton";
import PostList from "@/components/home/body/PostList";
import Filter from "@/components/home/filterPanel/Filter";
import HomeSearchBar from "@/components/home/filterPanel/HomeSearchBar";

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
