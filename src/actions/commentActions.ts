"use server";

import { AUTHORIZATION_HEADERS, COMMON_HEADERS } from "@/config/httpRequestHeaders";
import { COMMENT_API_URL } from "@/constants/apiEndpoints";
import type { Comment } from "@/types/commentTypes";
import type { MainCategory } from "@/types/filterTypes";
import { handleError } from "@/utils/errorHandler";

/** 댓글 요청 액션 */
export const getComments = handleError(
  async ({ postType, postId }: { postType: MainCategory; postId: string }): Promise<Comment[]> => {
    const res = await fetch(COMMENT_API_URL[postType](postId), {
      method: "GET",
      headers: COMMON_HEADERS,
      cache: "no-store",
    });
    const {
      data: { content },
    } = await res.json();
    return content;
  },
);

/** 댓글 작성 요청 액션 */
export const createComment = handleError(
  async ({
    postType,
    postId,
    comment,
    parentId,
  }: {
    postType: MainCategory;
    postId: string;
    comment: string;
    parentId?: number;
  }) => {
    const body = JSON.stringify({
      content: comment,
      ...(parentId && { parentId }),
    });

    const token =
      "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjMiLCJhdXRoIjoiVVNFUiIsInN0YXR1cyI6IkFDVElWRV9VU0VSIiwiZXhwIjozNTM4Mzg2MDAxLCJpYXQiOjE3MzgzODYwMDF9.51cif7fTuSNUeVNGsKLwcA5QPg-iIfnfc4zF5JLPaSU";

    const res = await fetch(COMMENT_API_URL.create[postType](postId), {
      method: "POST",
      headers: AUTHORIZATION_HEADERS(token),
      cache: "no-store",
      body,
    });
  },
);
