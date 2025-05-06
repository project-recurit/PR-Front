"use client";

interface CommentProps {
  commentData: [];
}

const Comment = ({ commentData }: CommentProps) => {
  console.log(' commentData => ', commentData);
  if (!commentData.length) return <div>댓글이 없습니다.</div>;

  return <div>Comment</div>;
};

export default Comment;
