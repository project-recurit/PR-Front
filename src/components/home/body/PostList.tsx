"use client";

import PJLabel from "@/components/home/body/PJLabel";
import PRLabel from "@/components/home/body/PRLabel";
import PostInfo from "@/components/layout/PostInfo";
import { useCategoryStore } from "@/hooks/state/useZustandStore";
import { useGetPostsQuery } from "@/hooks/tanstack/queries/useGetPosts";
import type { PJPost, PRPost } from "@/types/postTypes";
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
        const postInfo = {
          userNickname: post.userNickname,
          modifiedAt: post.modifiedAt,
          viewCount: post.viewCount,
          commentCount: post.commentCount,
          favoriteCount: post.favoriteCount,
        };
        return (
          <Link
            href={`/post/${post.id}?type=${selectedMenu}`}
            key={post.id}
          >
            <PostInfo {...postInfo}>
              {selectedMenu === "PJ" ? <PJLabel post={post as PJPost} /> : <PRLabel post={post as PRPost} />}
            </PostInfo>
          </Link>
        );
      })}
    </main>
  );
};

export default PostList;
