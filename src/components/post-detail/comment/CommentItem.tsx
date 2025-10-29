"use client";

import ReplyCommentItem from "./ReplyCommentItem";
import ProfileImage from "@/components/ui/ProfileImage";
import { useGetReplyCommentsQuery } from "@/hooks/tanstack/queries/useGetComments";
import { COMMENT_NICKNAME_STYLE, COMMENT_CREATED_AT_STYLE, REPLY_BUTTON_STYLE } from "@/styles/tailwindStyles";
import type { Comment } from "@/types";
import type { PostType } from "@/types/postTypes";
import { formatTimeAgo } from "@/utils/timeCalculation";
import { useState } from "react";

interface CommentItemProps {
  postType: PostType;
  commentData: Comment;
}

const CommentItem = ({ postType, commentData }: CommentItemProps) => {
  const [isReplyCommentsOpen, setIsReplyCommentsOpen] = useState(false);
  const {
    data: replyCommentsData,
    // isPending,
    // isError,
    // error,
    refetch,
  } = useGetReplyCommentsQuery({ postType, parentId: commentData.commentId });
  //TODO - 대댓글 로딩

  return (
    <div className="flex flex-col gap-24 border-b border-b-black-200 px-16 py-24">
      <div className="flex flex-row gap-12">
        <ProfileImage
          size="sm"
          src={commentData.profileUrl}
        />
        <div className="flex flex-col items-start gap-4">
          <div className="flex flex-row gap-8">
            <h4 className={COMMENT_NICKNAME_STYLE}>{commentData.nickname}</h4>
            <span className={COMMENT_CREATED_AT_STYLE}>{formatTimeAgo(commentData.createdAt)}</span>
          </div>
          <div className="caption-14-m">{commentData.content}</div>
          <button
            className={REPLY_BUTTON_STYLE}
            type="button"
          >
            답글
          </button>
          {commentData.replyCount > 0 && !isReplyCommentsOpen && (
            <button
              className="caption-12-m mt-8 text-orange"
              type="button"
              onClick={() => {
                refetch();
                setIsReplyCommentsOpen(true);
              }}
            >
              댓글 {commentData.replyCount}개 더보기
            </button>
          )}
        </div>
      </div>
      {isReplyCommentsOpen &&
        //NOTE - replyCommentsData 임시 조건
        replyCommentsData && (
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-24">
              {replyCommentsData.map((replyComment) => (
                <ReplyCommentItem
                  key={replyComment.commentId}
                  replyCommentData={replyComment}
                />
              ))}
            </div>
            <div>
              <button
                className="caption-12-r ml-96 text-black-800"
                type="button"
                onClick={() => setIsReplyCommentsOpen(false)}
              >
                접기
              </button>
            </div>
          </div>
        )}
    </div>
  );
};

export default CommentItem;
