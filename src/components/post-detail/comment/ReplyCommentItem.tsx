"use client";

import { BentArrow } from "@/assets/svgs/icons";
import ProfileImage from "@/components/ui/ProfileImage";
import { COMMENT_NICKNAME_STYLE, COMMENT_CREATED_AT_STYLE, REPLY_BUTTON_STYLE } from "@/styles/tailwindStyles";
import type { Comment } from "@/types";
import { formatTimeAgo } from "@/utils/timeCalculation";

interface ReplyCommentItemProps {
  replyCommentData: Comment;
}

const ReplyCommentItem = ({ replyCommentData }: ReplyCommentItemProps) => {
  return (
    <div className="flex flex-row gap-4">
      <BentArrow className={"shrink-0"} />
      <div className="flex flex-row gap-12">
        <ProfileImage
          size="sm"
          src={replyCommentData.profileUrl}
        />
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-8">
            <h4 className={COMMENT_NICKNAME_STYLE}>{replyCommentData.nickname}</h4>
            <span className={COMMENT_CREATED_AT_STYLE}>{formatTimeAgo(replyCommentData.createdAt)}</span>
          </div>
          <div>{replyCommentData.content}</div>
          <button
            className={REPLY_BUTTON_STYLE}
            type="button"
          >
            답글
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReplyCommentItem;
