import { Chat, LineHeart, MyUser, Users } from "@/assets/svgs/icons";
import ROUTES from "@/constants/routes";
import { NavMenu } from "@/types/navMenuTypes";

export const NAV_MENU: NavMenu[] = [
  { label: "모임", Icon: Users, path: ROUTES.home },
  { label: "채팅", Icon: Chat, path: ROUTES.chat },
  { label: "활동", Icon: LineHeart, path: ROUTES.dashboard },
  { label: "마이", Icon: MyUser, path: ROUTES.myPage },
];
