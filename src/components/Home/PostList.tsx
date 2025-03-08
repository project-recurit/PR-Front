"use client";

import { PJpost, PRpost } from "@/types/type";

import { useSearchParams } from "next/navigation";
import PJCard from "../ui/PJCard";
import PRCard from "../ui/PRCard";
import { useFilteredPosts } from "@/hooks/postFilter";

const PostList = ({ posts }: { posts?: (PRpost | PJpost)[] }) => {
  const params = useSearchParams();
  const query = params.get("search")?.toLowerCase();
  const viewPosts = useFilteredPosts(posts, query);

  return (
    <main className="w-full px-20 flex flex-col gap-y-20 py-20 mb-60">
      {viewPosts?.map((p) => {
        if ("content" in p) {
          return <PJCard post={p} key={p.id} />;
        } else {
          return <PRCard key={p.id} post={p} />;
        }
      })}
    </main>
  );
};

export default PostList;
