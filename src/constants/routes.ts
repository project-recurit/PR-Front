import type { MainCategory } from "@/types/filterTypes";

const ROUTES = {
  home: "/",
  register: "/register",
  logIn: "/log-in",
  dashboard: "/dashboard",
  postDetail: (postId: number, postType: MainCategory) => `/post/${postId}?type=${postType}`,
  chat: "/chat",
  myPage: "/my-page",
} as const;

export default ROUTES;
