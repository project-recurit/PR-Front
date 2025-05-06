import Filter from "@/components/Home/FilterPanel/Filter";
import HomeSearchBar from "@/components/Home/FilterPanel/HomeSearchBar";
import PostList from "@/components/Home/Post/PostList";
import { Suspense } from "react";

const Home = async () => {
  return (
    <div className="flex flex-col overflow-hidden">
      <div className="bg-white">
        <HomeSearchBar />
        <Filter />
      </div>
      <Suspense>
        <PostList />
      </Suspense>
    </div>
  );
};

export default Home;
