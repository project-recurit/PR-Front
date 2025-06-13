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

export type CreateCommentParams = {
  postType: PostType;
  postId: string;
  comment: string;
  parentId?: number;
};
