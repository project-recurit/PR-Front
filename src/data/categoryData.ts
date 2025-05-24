import type { MainCategory } from "@/types/filterTypes";

export const MAIN_CATEGORY: MainCategory[] = ["PJ", "PR"];

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

export const DUTY_CATEGORY = ["게임", "기획", "디자인", "모바일/APP", "백엔드", "프론트엔드"];
