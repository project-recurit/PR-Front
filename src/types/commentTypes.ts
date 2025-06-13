import type { PostType } from "./postTypes";

export type Comment = {
  commentId: number;
  content: string;
  createdAt: string;
  modifiedAt: string;
  nickname: string;
  profileUrl: string;
  replyCount: number;
};

export type GetCommentListParams = {
  postType: PostType;
  postId: string;
};

export type GetReplyCommentsParams = {
  postType: PostType;
  postId: string;
};

export type CreateCommentParams = {
  postType: PostType;
  postId: string;
  comment: string;
  parentId?: number;
};