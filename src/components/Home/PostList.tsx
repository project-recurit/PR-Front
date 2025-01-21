"use client";

import { PJpost, PRpost } from "@/type/type";
import { useFilteredPosts } from "@/utils/postFilter";
import { useSearchParams } from "next/navigation";

const PostList = ({ posts }: { posts?: (PRpost | PJpost)[] }) => {
  const params = useSearchParams();
  const query = params.get("search")?.toLowerCase();
  const viewPosts = useFilteredPosts(posts, query);

  return (
    <main className="bg-gray-100 w-full px-[20px]">
      {viewPosts?.map((p) => (
        <div key={p.id}>이러면 되나</div>
      ))}
    </main>
  );
};

export default PostList;
