const ROUTES = {
  home: "/",
  register: "/register",
  logIn: "/log-in",
  dashboard: "/dashboard",
  prDetail: (postId: number) => `/pr/${postId}`,
  pjDetail: (postId: number) => `/pj/${postId}`,
  chat: "/chat",
  myPage: "/my-page",
  myResume: "my-resume",
  profile: (userId: number) => `/profile/${userId}`,
} as const;

export default ROUTES;
