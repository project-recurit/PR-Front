"use client";

import PJLabel from "@/components/home/body/PJLabel";
import PRLabel from "@/components/home/body/PRLabel";
import PostInfo from "@/components/layout/PostInfo";
import ROUTES from "@/constants/routes";
import { useCategoryStore } from "@/hooks/state/useZustandStore";
import { useGetPostsQuery } from "@/hooks/tanstack/queries/useGetPosts";
import type { PJPost, PRPost } from "@/types/postTypes";
import Link from "next/link";

const PostList = () => {
  const { selectedMenu } = useCategoryStore((state) => state);
  const { data: postData, isPending, isError, error } = useGetPostsQuery({ postType: selectedMenu });
  console.log(" postData => ", postData);

  //TODO - 로딩 컴포넌트 완성 시 변경
  if (isPending) return <div>Loading...</div>;

  if (isError) throw new Error(error.message);

  return (
    <section className="flex w-full flex-col gap-y-20 px-20 py-20">
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
            href={ROUTES.postDetail(post.id, selectedMenu)}
            key={post.id}
          >
            <PostInfo {...postInfo}>
              {selectedMenu === "PJ" ? <PJLabel post={post as PJPost} /> : <PRLabel post={post as PRPost} />}
            </PostInfo>
          </Link>
        );
      })}
    </section>
  );
};

export default PostList;
