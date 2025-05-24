import { Chat, LineHeart, MyUser, Users } from "@/assets/svgs/icons";

export const NAV_MENU = [
  { title: "모임", Component: Users, route: "/" },
  { title: "채팅", Component: Chat, route: "/chat" },
  { title: "활동", Component: LineHeart, route: "/dashboard" },
  { title: "마이", Component: MyUser, route: "/mypage" },
];
