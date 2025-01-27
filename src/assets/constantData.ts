import { Chat, LineHeart, MyUser, Users } from "@/assets/icons";

export const MAIN_CATEGORY = ["전체", "PJ", "PR"];

export const FILTER_MENU = ["기술 스택", "포지션", "진행방식"];

export const NAV_MENU = [
  { title: "모임", Component: Users },
  { title: "채팅", Component: Chat },
  { title: "현황", Component: LineHeart },
  { title: "마이", Component: MyUser },
];
