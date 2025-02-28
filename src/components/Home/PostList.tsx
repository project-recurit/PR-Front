"use client";

import PJCard from "../ui/PJCard";
import PRCard from "../ui/PRCard";
import { useFilteredPosts } from "@/hooks/postFilter";
import { PJpost, PRpost } from "@/types/type";
import { useSearchParams } from "next/navigation";

const PostList = ({ posts }: { posts?: (PRpost | PJpost)[] }) => {
  const params = useSearchParams();
  const query = params.get("search")?.toLowerCase();
  const viewPosts = useFilteredPosts(posts, query);

  return (
    <main className="mb-60 flex w-full flex-col gap-y-20 px-20 py-20">
      {viewPosts?.map((p) => {
        if ("content" in p) {
          return (
            <PJCard
              post={p}
              key={p.id}
            />
          );
        } else {
          return (
            <PRCard
              key={p.id}
              post={p}
            />
          );
        }
      })}
    </main>
  );
};

export default PostList;
