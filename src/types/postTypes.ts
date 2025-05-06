//TODO - 확정 시 수정
export type Post = {
  id: number;
  userNickname: string;
  title: string;
  modifiedAt: string;
  techStacks: { id: number; name: string }[];
  viewCount: number;
  commentCount: number;
  favoriteCount: number;
};

export type PJPost = Post & {
  content: string;
};

export type PRPost = Post & {
  workType: string;
};
