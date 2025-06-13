import type { PostTargetParams } from "./api/paramsTypes";
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

export type CreateCommentParams<T extends PostType = PostType> = PostTargetParams<T> & {
  comment: string;
  parentId?: number;
};
