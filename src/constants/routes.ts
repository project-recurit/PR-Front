import type { PostType } from "@/types/filterTypes";

const ROUTES = {
  home: "/",
  register: "/register",
  logIn: "/log-in",
  dashboard: "/dashboard",
  postDetail: (postId: number, postType: PostType) => `/post/${postId}?type=${postType}`,
  chat: "/chat",
  myPage: "/my-page",
} as const;

export default ROUTES;
