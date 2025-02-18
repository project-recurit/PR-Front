import FirstStep from "@/app/sign-up/components/FirstStep";
import SecondStep from "@/app/sign-up/components/SecondStep";
import ThirdStep from "@/app/sign-up/components/ThirdStep";
import { Chat, LineHeart, MyUser, Users } from "@/assets/icons";
import { FC } from "react";

export const MAIN_CATEGORY = ["전체", "PJ", "PR"];

export const FILTER_MENU = ["기술 스택", "포지션", "진행방식"];

export const NAV_MENU = [
  { title: "모임", Component: Users, route: "/" },
  { title: "채팅", Component: Chat, route: "/chat" },
  { title: "활동", Component: LineHeart, route: "/dashboard" },
  { title: "마이", Component: MyUser, route: "/mypage" },
];

export const HIDDEN_PATH = ["/login", "/sign-up"];

export const STEP_COMPONENTS: Record<number, FC> = {
  0: FirstStep,
  1: SecondStep,
  2: ThirdStep,
};

export const DUTY_CATEGORY = [
  "게임",
  "기획",
  "디자인",
  "모바일/APP",
  "백엔드",
  "프론트엔드",
];
