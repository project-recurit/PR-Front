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
  const { data: commentsData, isPending, isError, error } = useGetComments({ postType, postId });

  //TODO - 로딩 컴포넌트 완성 시 변경
  if (isPending) return <div>댓글을 불러오는 중입니다.</div>;

  if (isError) throw new Error(error.message);

  return (
    <section className="flex flex-col border-t border-t-black-200">
      <div className="py-24 px-16">댓글 {commentsData.length}</div>
      <CommentInput
        postType={postType}
        postId={postId}
      />

      {commentsData.length === 0 ? (
        <div>댓글이 없습니다.</div>
      ) : (
        commentsData.map((comment) => (
          <Comment
            key={comment.commentId}
            commentData={comment}
          />
        ))
      )}
    </section>
  );
};

export default CommentSection;
