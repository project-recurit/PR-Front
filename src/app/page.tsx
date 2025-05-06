import PostList from "@/components/Home/Body/PostList";
import Filter from "@/components/Home/FilterPanel/Filter";
import HomeSearchBar from "@/components/Home/FilterPanel/HomeSearchBar";
import FloatingButton from "@/components/Layout/FloatingButton";

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
