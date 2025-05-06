"use client";

import PJCard from "@/components/ui/PJCard";
import PRCard from "@/components/ui/PRCard";
import { useGetPostsQuery } from "@/hooks/queries/useGetPosts";
import { useCategoryStore } from "@/hooks/state/useZustandStore";
import { useSearchParams } from "next/navigation";

const PostList = () => {
  const params = useSearchParams();
  const query = params.get("search")?.toLowerCase();
  // const viewPosts = useFilteredPosts(posts, query);
  const { selectedMenu } = useCategoryStore((state) => state);
  const { data: postData, isPending, isError, error } = useGetPostsQuery({ postType: selectedMenu });
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
