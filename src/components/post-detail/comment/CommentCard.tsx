"use client";

import type { Comment } from "@/types/commentTypes";
import { getRelativeTime } from "@/utils/timeCalculation";

interface CommentCardProps {
  commentData: Comment;
}

const CommentCard = ({ commentData }: CommentCardProps) => {
  const realativeTime = getRelativeTime(commentData.createdAt);

  return (
    <>
      <img
        className="w-40 h-40 rounded-full"
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
      </div>
    </>
  );
};

export default CommentCard;
