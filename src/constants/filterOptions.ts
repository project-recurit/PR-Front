import type { PostType } from "@/types/postTypes";
import type { TechStack } from "@/types/techStackTypes";

export const POST_TYPES: PostType[] = ["PJ", "PR"] as const;

export const POSITIONS = ["게임", "기획", "디자인", "모바일/APP", "백엔드", "프론트엔드"] as const;

export const createFilterMenus = (allTechStacks: TechStack[]) =>
  [
    {
      category: "포지션",
      chips: POSITIONS,
    },
    {
      category: "기술 스택",
      chips: allTechStacks.map((techStack) => techStack.name),
    },
    { category: "진행방식", chips: ["온라인", "오프라인"] },
    {
      category: "진행기간",
      chips: ["3개월 미만", "3개월", "6개월", "9개월", "12개월"],
    },
  ] as const;
