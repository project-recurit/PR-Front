"use client";

import CommentCard from "./CommentCard";
import { useGetComments } from "@/hooks/tanstack/queries/useGetComments";
import type { PostType } from "@/types/postTypes";

interface CommentProps {
  postType: PostType;
  postId: string;
}

const CommentList = ({ postType, postId }: CommentProps) => {
  const { data: commentsData, isPending, isError, error } = useGetComments({ postType, postId });

  //TODO - 로딩 컴포넌트 완성 시 변경
  if (isPending) return <div>댓글을 불러오는 중입니다.</div>;

  if (isError) throw new Error(error.message);

  return (
    <>
      {commentsData.length === 0 ? (
        <div>댓글이 없습니다.</div>
      ) : (
        commentsData.map((comment) => (
          <CommentCard
            key={comment.commentId}
            commentData={comment}
          />
        ))
      )}
    </>
  );
};

export default CommentList;
