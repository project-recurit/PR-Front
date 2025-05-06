"use client";

import PJCard from "@/components/UI/PJCard";
import PRCard from "@/components/UI/PRCard";
import { useGetPosts } from "@/hooks/queries/post/useGetPosts";
import { useCategoryStore } from "@/hooks/state/useZustandStore";
import { useSearchParams } from "next/navigation";

const PostList = () => {
  const params = useSearchParams();
  const query = params.get("search")?.toLowerCase();
  // const viewPosts = useFilteredPosts(posts, query);
  const { selectedMenu } = useCategoryStore((state) => state);
  const { data: postData, isPending, isError, error } = useGetPosts(selectedMenu);
  console.log(postData);

  //TODO - 로딩 컴포넌트 완성 시 변경
  if (isPending) return <div>Loading...</div>;

  if (isError) throw new Error(error.message);

  return (
    <main className="mb-60 flex w-full flex-col gap-y-20 px-20 py-20">
      {postData.map((post) => {
        return selectedMenu === "PJ" ? (
          <PJCard
            key={post.id}
            post={post}
          />
        ) : (
          <PRCard
            key={post.id}
            post={post}
          />
        );
      })}
    </main>
  );
};

export default PostList;
