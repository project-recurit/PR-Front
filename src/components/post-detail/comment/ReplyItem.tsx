"use client";

import { BentArrow } from "@/assets/svgs/icons";
import type { Comment } from "@/types";
import { formatTimeAgo } from "@/utils/timeCalculation";

interface ReplyItemProps {
  replyData: Comment;
}

const ReplyItem = ({ replyData }: ReplyItemProps) => {
  return (
    <>
      <BentArrow />
      <div className="flex flex-row gap-12 border-b border-b-black-200 px-16 py-18">
        <img
          className="h-40 w-40 rounded-full"
          src={replyData.profileUrl}
          alt="profile image"
        />
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-8">
            <h4>{replyData.nickname}</h4>
            <span>{formatTimeAgo(replyData.createdAt)}</span>
          </div>
          <div>{replyData.content}</div>
          <button
            className="flex"
            type="button"
          >
            답글
          </button>
        </div>
      </div>
    </>
  );
};

export default ReplyItem;
