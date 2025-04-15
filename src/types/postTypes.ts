//TODO - 확정 시 수정
export type Post = {
  title: string;
  viewCount: number;
  techStacks: { techStackId: number; name: string }[];
  commentCount: number;
};

export type PJPost = Post & {
  id: number;
  userNickname: string;
  content: string;
  modifiedAt: string;
};

export type PRPost = Post & {
  publicResumeId: number;
  workType: string;
  favoriteCount: number;
};
