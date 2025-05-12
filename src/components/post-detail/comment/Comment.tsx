"use client";

import type { Comment } from "@/types/commentTypes";

interface CommentProps {
  commentData: Comment;
}

const Comment = ({ commentData }: CommentProps) => {
  console.log(" commentData => ", commentData);
  const realativeTime = getRelativeTime(commentData.createdAt);
  return (
    <div>
      <span>이미지</span>
      <div>
        <h4>{commentData.nickname}</h4>
        <span>{realativeTime}</span>
        <div>{commentData.content}</div>
        {commentData.replyCount > 0 && <button>댓글 {commentData.replyCount}개 더보기</button>}
      </div>
    </div>
  );
};

export default Comment;
