import ActionTap from "@/components/Home/ActionTap";
import Filter from "@/components/Home/Filter";
import PostList from "@/components/Home/PostList";
import SearchBar from "@/components/Home/SearchBar";
import { fetchAllPosts } from "@/services/postServices";

export default async function Home() {
  const posts = await fetchAllPosts();
  return (
    <div className="flex flex-col">
      <div className="px-[20px] flex flex-col gap-y-[16px] mb-[16px]">
        <ActionTap />
        <SearchBar />
        <Filter />
      </div>
      <PostList posts={posts} />
    </div>
  );
}
