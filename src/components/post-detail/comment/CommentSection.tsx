"use client";

import Comment from "./Comment";
import CommentInput from "./CommentInput";
import { useGetComments } from "@/hooks/queries/useGetComments";
import type { MainCategory } from "@/types/filterTypes";

interface CommentSectionProps {
  postType: MainCategory;
  postId: string;
}

const CommentSection = ({ postType, postId }: CommentSectionProps) => {
  const { data, isPending, isError, error } = useGetComments({ postType, postId });

  //TODO - 로딩 컴포넌트 완성 시 변경
  if (isPending) return <div>댓글을 불러오는 중입니다.</div>;

  if (isError) throw new Error(error.message);

  return (
    <div>
      <div>
        <h3>댓글 {data.length}</h3>
      </div>
      <CommentInput postId={postId} />
      <Comment commentData={data} />
    </div>
  );
};

export default CommentSection;
