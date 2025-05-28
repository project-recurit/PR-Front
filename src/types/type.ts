export type TechStack = {
  techStackId: number;
  name: string;
};

export type SignupForm = {
  socialId: number;
  position: string;
  techStackIds: number[];
  nickname: string;
};
