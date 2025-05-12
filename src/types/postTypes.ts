//TODO - 확정 시 수정
export type Post = {
  id: number;
  userNickname: string;
  title: string;
  modifiedAt: string;
  viewCount: number;
  commentCount: number;
  favoriteCount: number;
};

export type PJPost = Post & {
  recruitmentCategory: string;
  commercial: boolean;
  techStacks: {
    id: number;
    name: string;
  }[];
};

export type PRPost = Post & {
  profileUrl: string;
  workType: string;
  position: string;
  techStacks: {
    id: number;
    name: string;
    level: number;
  }[];
};
