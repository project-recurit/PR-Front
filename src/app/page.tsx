import Filter from "@/components/Home/Filter";
import HomeSearchBar from "@/components/Home/HomeSearchBar";
import PostList from "@/components/Home/PostList";
import { fetchAllPosts } from "@/services/postServices";
import { Suspense } from "react";

const Home = async () => {
  const posts = await fetchAllPosts();
  return (
    <div className="flex flex-col overflow-hidden">
      <div className="bg-white">
        <HomeSearchBar />
        <Filter />
      </div>
      <Suspense>
        <PostList posts={posts} />
      </Suspense>
    </div>
  );
};

export default Home;
