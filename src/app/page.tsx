import ActionTap from "@/components/Home/ActionTap";
import Filter from "@/components/Home/Filter";
import PostList from "@/components/Home/PostList";

export default async function Home() {
  return (
    <div className="flex flex-col">
      <div className="px-[20px]">
        <ActionTap />
        <Filter />
      </div>
      <PostList />
    </div>
  );
}
