"use client";

import PostBody from "./PostBody";
import PostTitle from "./PostTitle";
import CardFooter from "@/components/UI/CardFooter";
import CardProfile from "@/components/UI/CardProfile";
import { useGetPostDetailQuery } from "@/hooks/queries/post/useGetPosts";
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
      <CardProfile
        userNickname={postData.userNickname}
        modifiedAt={postData.modifiedAt}
      />
      {postData.title}
      <CardFooter
        viewCount={postData.viewCount}
        commentCount={postData.commentCount}
        favoriteCount={postData.favoriteCount}
      />
      <PostBody />
    </>
  );
};

export default PostSection;
