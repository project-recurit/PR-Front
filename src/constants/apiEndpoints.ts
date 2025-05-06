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
} as const;

export const COMMENT_API_URL = {
  root: (postId: string) => `${BASE_URL}/api/v1/recruitment/${postId}/comments`,
  reply: (parentId: string) => `${BASE_URL}/api/v1/recruitment/${parentId}/reply`,
  create: (postId: string) => `${BASE_URL}/api/v1/recruitment/${postId}/comment`,
  modify: (commentId: string) => `${BASE_URL}/api/v1/recruitment/${commentId}`,
} as const;
