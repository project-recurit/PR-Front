"use client";

import PJPostBody from "./PJPostBody";
import PRPostBody from "./PRPostBody";
import Engagement from "@/components/layout/Engagement";
import PostProfile from "@/components/layout/PostProfile";
import { useGetPostDetailQuery } from "@/hooks/tanstack/queries/useGetPosts";
import type { PostType } from "@/types/postTypes";

interface PostSectionProps {
  postType: PostType;
  postId: string;
  isPJPost: boolean;
}

const PostSection = ({ postType, postId, isPJPost }: PostSectionProps) => {
  const { data: postData, isPending, isError, error } = useGetPostDetailQuery({ postType, postId });
  console.log(" postData => ", postData);

  //TODO - 로딩 컴포넌트 완성 시 변경
  if (isPending) return <div>게시물을 불러오고 있습니다.</div>;

  if (isError) throw new Error(error.message);

  return (
    <section className="px-16">
      <PostProfile
        nickname={postData.nickname}
        modifiedAt={postData.modifiedAt}
      />
      <h2>{postData.title}</h2>
      <Engagement
        viewCount={postData.viewCount}
        commentCount={postData.commentCount}
        favoriteCount={postData.favoriteCount}
      />
      <div>{isPJPost ? <PJPostBody /> : <PRPostBody />}</div>
      <hr className="-mx-16 border-black-200" />
      <div className="py-24">댓글 {postData.commentCount}</div>
    </section>
  );
};

export default PostSection;
