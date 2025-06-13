import type { TechStack } from "./techStackTypes";

export type PostType = "PJ" | "PR";

export type Post = {
  id: number;
  nickname: string;
  title: string;
  modifiedAt: string;
  viewCount: number;
  commentCount: number;
  favoriteCount: number;
  techStacks: TechStack[];
};

export type PJPost = Post & {
  recruitmentCategory: string;
  commercial: boolean;
};

export type PRPost = Post & {
  profileUrl: string;
  workType: string;
  position: string;
};
