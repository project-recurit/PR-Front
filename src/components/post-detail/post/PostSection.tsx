"use client";

import PostBody from "./PostBody";
import Engagement from "@/components/layout/Engagement";
import PostProfile from "@/components/layout/PostProfile";
import { useGetPostDetailQuery } from "@/hooks/queries/useGetPosts";
import type { MainCategory } from "@/types/filterTypes";

interface PostSectionProps {
  postType: MainCategory;
  postId: string;
}

const PostSection = ({ postType, postId }: PostSectionProps) => {
  const { data: postData, isPending, isError, error } = useGetPostDetailQuery({ postType, postId });
  console.log(" postData => ", postData);

  //TODO - 로딩 컴포넌트 완성 시 변경
  if (isPending) return <div>게시물을 불러오고 있습니다.</div>;

  if (isError) throw new Error(error.message);

  return (
    <>
      <PostProfile
        userNickname={postData.userNickname}
        modifiedAt={postData.modifiedAt}
      />
      {postData.title}
      <Engagement
        viewCount={postData.viewCount}
        commentCount={postData.commentCount}
        favoriteCount={postData.favoriteCount}
      />
      <PostBody content={postData.content} />
    </>
  );
};

export default PostSection;
