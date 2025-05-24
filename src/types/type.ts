export interface TechStack {
  techStackId: number;
  name: string;
}

export interface SignupForm {
  socialId: number;
  position: string;
  techStackIds: number[];
  nickname: string;
}
