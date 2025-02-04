import { Chat, LineHeart, MyUser, Users } from "@/assets/icons";

export const MAIN_CATEGORY = ["전체", "PJ", "PR"];

export const FILTER_MENU = ["기술 스택", "포지션", "진행방식"];

export const NAV_MENU = [
  { title: "모임", Component: Users, route: "/" },
  { title: "채팅", Component: Chat, route: "/chat" },
  { title: "현황", Component: LineHeart, route: "/dashboard" },
  { title: "마이", Component: MyUser, route: "/mypage" },
];
