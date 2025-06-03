import type { TechStack } from "@/types/commonTypes";
import type { MainCategory } from "@/types/filterTypes";

export const MAIN_CATEGORY: MainCategory[] = ["PJ", "PR"] as const;

export const POSITIONS = ["게임", "기획", "디자인", "모바일/APP", "백엔드", "프론트엔드"];

export const createFilterMenus = (allTechStacks: Readonly<TechStack[]>) => [
  {
    category: "포지션",
    chips: POSITIONS,
  },
  {
    category: "기술 스택",
    chips: allTechStacks,
  },
  { category: "진행방식", chips: ["온라인", "오프라인"] },
  {
    category: "진행기간",
    chips: ["3개월 미만", "3개월", "6개월", "9개월", "12개월"],
  },
];
