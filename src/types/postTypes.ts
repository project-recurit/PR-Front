import type { TechStack } from "./techStackTypes";

export type PostType = "PJ" | "PR";

export type PositionType = "BACKEND" | "FRONTEND" | "DESIGNER" | "PM" | "MOBILE" | "GAME";
export const POSITION_LABEL: Record<PositionType, string> = {
  BACKEND: "백엔드",
  FRONTEND: "프론트엔드",
  DESIGNER: "디자이너",
  PM: "프로덕트 매니저",
  MOBILE: "모바일",
  GAME: "게임 개발자",
};

export type WorkType = "ONLINE" | "OFFLINE" | "ALL";

export const WORK_TYPE_LABEL: Record<WorkType, string> = {
  ONLINE: "온라인",
  OFFLINE: "오프라인",
  ALL: "전체",
};

export type EstimatedDurationType =
  | "WITHIN_THREE_MONTHS"
  | "THREE_MONTHS"
  | "SIX_MONTHS"
  | "NINE_MONTHS"
  | "ONE_YEAR"
  | "MORE_THAN_ONE_YEAR";

export const DURATION_LABEL: Record<EstimatedDurationType, string> = {
  WITHIN_THREE_MONTHS: "3개월 미만",
  THREE_MONTHS: "3개월",
  SIX_MONTHS: "6개월",
  NINE_MONTHS: "9개월",
  ONE_YEAR: "12개월",
  MORE_THAN_ONE_YEAR: "1년 이상",
};
export type RecruitmentCategory =
  | "ECOMMERCE"
  | "FINANCE"
  | "COMMUNITY"
  | "SOCIAL_MEDIA"
  | "TELECOMMUNICATIONS"
  | "EDUCATION"
  | "PUBLIC_SECTOR"
  | "HEALTHCARE"
  | "MANUFACTURING"
  | "HARDWARE_EMBEDDED"
  | "GAME"
  | "SECURITY_ANTIVIRUS"
  | "AI";

export type Post = {
  id: number;
  nickname: string;
  title: string;
  profileUrl: string;
  createdAt: string;
  modifiedAt: string;
  viewCount: number;
  commentCount: number;
  favoriteCount: number;
  techStacks: TechStack[];
};

export type PJPost = Post & {
  content: string;
  estimatedDuration: EstimatedDurationType;
  deadLine: string;
  workType: WorkType;
  recruitmentCategory: RecruitmentCategory;
  fileUrls: {
    id: number;
    imageUrl: string;
  }[];
  positions: {
    position: PositionType;
    capacity: number;
  }[];
  estimatedDurationDetail: string;
  commercial: boolean;
  recruiting: boolean;
};

export type PRPost = Post & {
  workType: WorkType;
  position: PositionType;
  introduce: string;
  experiences: PrExperience[];
};

export type PrExperience = {
  id: number;
  title: string;
  description: string;
  teamSize: number;
  startDate: string;
  endDate: string;
  documentUrl: string;
};
