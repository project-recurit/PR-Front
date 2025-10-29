import { FilterCategory, FilterChip } from "@/types/filterTypes";
import { DURATION_LABEL, POSITION_LABEL, WORK_TYPE_LABEL, type PostType } from "@/types/postTypes";
import type { TechStack } from "@/types/techStackTypes";

const getFormattedFilter = (data: Record<string, string>): FilterChip[] => {
  return Object.entries(data).map(([type, title]) => ({
    type, // "WITHIN_THREE_MONTHS" | ...
    title, // "3개월 미만" | ...
  }));
};

export const POST_TYPES: PostType[] = ["PJ", "PR"] as const;

export const POSITIONS: FilterChip[] = getFormattedFilter(POSITION_LABEL);

export const WORKTYPES: FilterChip[] = getFormattedFilter(WORK_TYPE_LABEL);

export const DURATIONS: FilterChip[] = getFormattedFilter(DURATION_LABEL);

export const createFilterMenus = (allTechStacks: TechStack[]): FilterCategory[] => [
  { key: "position", title: "포지션", chips: POSITIONS },
  {
    key: "techStack",
    title: "기술 스택",
    chips: allTechStacks.map(({ id, name }) => ({ type: id, title: name })),
  },
  { key: "workType", title: "진행 방식", chips: WORKTYPES },
  { key: "duration", title: "진행 기간", chips: DURATIONS },
];
