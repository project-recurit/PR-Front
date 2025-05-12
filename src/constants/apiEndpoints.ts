import { BASE_URL } from "@/config/env";

export const POST_API_URL = {
  list: {
    PJ: `${BASE_URL}/api/v1/recruitment`,
    PR: `${BASE_URL}/api/v1/post/pr`,
  },
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
  root: (postId: string) => `${BASE_URL}/api/v1/recruitment/${postId}/comments`,
  reply: (parentId: string) => `${BASE_URL}/api/v1/recruitment/${parentId}/reply`,
  create: (postId: string) => `${BASE_URL}/api/v1/recruitment/${postId}/comment`,
  modify: (commentId: string) => `${BASE_URL}/api/v1/recruitment/${commentId}`,
} as const;

export const AUTH_API_URL = {
  signUp: `${BASE_URL}/api/v1/users/register`,
};

export const TECH_STACK_API_URL = `${BASE_URL}/api/v1/tech-stack`;
