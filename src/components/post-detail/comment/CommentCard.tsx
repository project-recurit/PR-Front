"use client";

import type { Comment } from "@/types/commentTypes";
import { formatTimeAgo } from "@/utils/timeCalculation";

interface CommentCardProps {
  commentData: Comment;
}

const CommentCard = ({ commentData }: CommentCardProps) => {
  const realativeTime = formatTimeAgo(commentData.createdAt);

  return (
    <div className="flex flex-row gap-12 border-b border-b-black-200 px-16 py-18">
      <img
        className="h-40 w-40 rounded-full"
        src={commentData.profileUrl}
        alt="profile image"
      />
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-8">
          <h4>{commentData.nickname}</h4>
          <span>{realativeTime}</span>
        </div>
        <div>{commentData.content}</div>
        <button className="flex">답글</button>
        {commentData.replyCount > 0 && <button>댓글 {commentData.replyCount}개 더보기</button>}
      </div>
    </div>
  );
};

export default CommentCard;
