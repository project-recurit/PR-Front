import { BASE_URL } from "@/config/env";

const BASE_URL_V1 = `${BASE_URL}/api/v1` as const;

export const POST_API_URL = {
  PJ: `${BASE_URL_V1}/recruitment`,
  PR: `${BASE_URL_V1}/post/pr`,
  detail: {
    PJ: (postId: string) => `${BASE_URL_V1}/recruitment/${postId}`,
    PR: (postId: string) => `${BASE_URL_V1}/post/pr/${postId}`,
  },
  application: {
    apply: (pjId: string) => `${BASE_URL_V1}/recruitment/${pjId}/applicant`,
    modify: (pjId: string, applicationId: string) => `${BASE_URL_V1}/recruitment/${pjId}/applicant/${applicationId}`,
  },
} as const;

export const COMMENT_API_URL = {
  PJ: (postId: string) => `${BASE_URL_V1}/recruitment/${postId}/comments`,
  PR: (postId: string) => `${BASE_URL_V1}/prs/${postId}/comments`,
  reply: {
    PJ: (parentId: number) => `${BASE_URL_V1}/recruitment/comment/${parentId}/reply`,
    PR: (parentId: number) => `${BASE_URL_V1}/prs/comment/${parentId}/reply`,
  },
  create: {
    PJ: (postId: string) => `${BASE_URL_V1}/recruitment/${postId}/comment`,
    PR: (postId: string) => `${BASE_URL_V1}/prs/${postId}/comments`,
  },
  modify: {
    PJ: (commentId: string) => `${BASE_URL_V1}/recruitment/${commentId}`,
    PR: (commentId: string) => `${BASE_URL_V1}prs/comment/${commentId}`,
  },
} as const;

export const NOTIFICATION_API_URL = (notificationId?: string) =>
  notificationId
    ? (`${BASE_URL_V1}/notifications/${notificationId}` as const)
    : (`${BASE_URL_V1}/notifications` as const);

export const AUTH_API_URL = {
  logIn: `${BASE_URL_V1}/auth/login`,
  register: `${BASE_URL_V1}/users/register`,
} as const;

export const TECH_STACK_API_URL = `${BASE_URL_V1}/tech-stack` as const;
