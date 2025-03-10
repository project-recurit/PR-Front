import FirstStep from "@/app/sign-up/components/FirstStep";
import SecondStep from "@/app/sign-up/components/SecondStep";
import ThirdStep from "@/app/sign-up/components/ThirdStep";
import { Chat, LineHeart, MyUser, Users } from "@/assets/icons";
import type { CategoryMenu } from "@/types/filterTypes";
import { FC } from "react";

export const MAIN_CATEGORY: CategoryMenu[] = ["전체", "PJ", "PR"];

export const FILTER_MENU = [
  {
    category: "포지션",
    chips: ["게임", "기획", "디자인", "모바일/APP", "백엔드", "프론트엔드"],
  },
  {
    category: "기술 스택",
    chips: [
      "React",
      "Vue",
      "Angular",
      "Node.js",
      "Django",
      "Flask",
      "Spring",
      "Express",
      "Nest.js",
      "Next.js",
      "Nuxt.js",
      "Svelte",
      "Vanilla JS",
      "Vanilla CSS",
      "Tailwind CSS",
      "Bootstrap",
      "Material UI",
      "Ant Design",
      "Chakra UI",
      "Styled Components",
      "Emotion",
      "Jest",
      "Mocha",
      "Cypress",
      "React Testing Library",
      "Jasmine",
      "Karma",
      "Enzyme",
      "Puppeteer",
      "Playwright",
      "Junit",
      "Mockito",
      "PowerMock",
      "EasyMock",
    ],
  },
  { category: "진행방식", chips: ["온라인", "오프라인"] },
  {
    category: "진행기간",
    chips: ["3개월 미만", "3개월", "6개월", "9개월", "12개월"],
  },
];

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

export const DUTY_CATEGORY = ["게임", "기획", "디자인", "모바일/APP", "백엔드", "프론트엔드"];

export enum NOTIFICATION_TYPE {
  accept = "ACCEPT",
  reject = "REJECT",
  comment = "COMMENT",
  chat = "CHAT",
}

export enum POST_TYPE {
  project = "project",
  profile = "profile",
}
