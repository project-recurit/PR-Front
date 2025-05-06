"use client";

import PJCard from "@/components/home/body/PJCard";
import PRCard from "@/components/home/body/PRCard";
import { useGetPostsQuery } from "@/hooks/queries/useGetPosts";
import { useCategoryStore } from "@/hooks/state/useZustandStore";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const PostList = () => {
  const params = useSearchParams();
  const query = params.get("search")?.toLowerCase();
  // const viewPosts = useFilteredPosts(posts, query);
  const { selectedMenu } = useCategoryStore((state) => state);
  const { data: postData, isPending, isError, error } = useGetPostsQuery({ postType: selectedMenu });
  console.log(" postData => ", postData);

  //TODO - 로딩 컴포넌트 완성 시 변경
  if (isPending) return <div>Loading...</div>;

  if (isError) throw new Error(error.message);

  return (
    <main className="mb-60 flex w-full flex-col gap-y-20 px-20 py-20">
      {postData.map((post) => {
        return (
          <Link
            href={`/post/${post.id}?type=${selectedMenu}`}
            key={post.id}
          >
            {selectedMenu === "PJ" ? <PJCard post={post} /> : <PRCard post={post} />}
          </Link>
        );
      })}
    </main>
  );
};

export default PostList;
