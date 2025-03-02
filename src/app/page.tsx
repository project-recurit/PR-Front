import Filter from "@/components/Home/Filter";
import PostList from "@/components/Home/PostList";
import SearchBar from "@/components/Home/SearchBar";
import { fetchAllPosts } from "@/services/postServices";
import { Suspense } from "react";

const Home = async () => {
  const posts = await fetchAllPosts();
  return (
    <div className="flex flex-col overflow-hidden">
      <div className="bg-white">
        <SearchBar />
        <Filter />
      </div>
      <Suspense>
        <PostList posts={posts} />
      </Suspense>
    </div>
  );
};

export default Home;
