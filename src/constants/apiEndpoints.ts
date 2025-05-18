import { BASE_URL } from "@/config/env";

export const POST_API_URL = {
  PJ: `${BASE_URL}/api/v1/recruitment`,
  PR: `${BASE_URL}/api/v1/post/pr`,
  detail: {
    PJ: (postId: string) => `${BASE_URL}/api/v1/recruitment/${postId}`,
    PR: (postId: string) => `${BASE_URL}/api/v1/post/pr/${postId}`,
  },
  application: {
    apply: (pjId: string) => `${BASE_URL}/api/v1/recruitment/${pjId}/applicant`,
    modify: (pjId: string, applicationId: string) =>
      `${BASE_URL}/api/v1/recruitment/${pjId}/applicant/${applicationId}`,
  },
} as const;

export const COMMENT_API_URL = {
  PJ: (postId: string) => `${BASE_URL}/api/v1/recruitment/${postId}/comments`,
  PR: (postId: string) => `${BASE_URL}/api/v1/prs/${postId}/comments`,
  reply: {
    PJ: (parentId: string) => `${BASE_URL}/api/v1/recruitment/${parentId}/reply`,
    PR: (postId: string, parentId: string) => `${BASE_URL}/api/v1/prs/${postId}/comments/${parentId}/reply`,
  },
  create: {
    PJ: (postId: string) => `${BASE_URL}/api/v1/recruitment/${postId}/comment`,
    PR: (postId: string) => `${BASE_URL}/api/v1/prs/${postId}/comments`,
  },
  modify: {
    PJ: (commentId: string) => `${BASE_URL}/api/v1/recruitment/${commentId}`,
    PR: (postId: string, commentId: string) => `${BASE_URL}/api/v1/prs/${postId}/comments/${commentId}`,
  },
} as const;

export const NOTIFICATION_API_URL = (notificationId?: string) =>
  notificationId
    ? (`${BASE_URL}/api/v1/notifications/${notificationId}` as const)
    : (`${BASE_URL}/api/v1/notifications` as const);

export const AUTH_API_URL = {
  signUp: `${BASE_URL}/api/v1/users/register`,
} as const;

export const TECH_STACK_API_URL = `${BASE_URL}/api/v1/tech-stack` as const;
