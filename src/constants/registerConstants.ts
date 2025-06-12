import type { RegisterFormData } from "@/types/authTypes";

export const REGISTER_FIELDS: Readonly<{ [key: string]: keyof RegisterFormData }> = {
  position: "position",
  techStacks: "techStacks",
  nickname: "nickname",
};

/** 단계별 필드 키 */
export const REGISTER_STEP_FIELD_MAP: Readonly<{ [key: number]: keyof RegisterFormData }> = {
  1: REGISTER_FIELDS.position,
  2: REGISTER_FIELDS.techStacks,
  3: REGISTER_FIELDS.nickname,
};
