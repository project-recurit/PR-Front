"use server";

import { tempAccessToken } from "@/assets/tempAccessToken";
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

/** 대댓글 요청 액션 */
export const getReplyComments = handleError(
  async ({ postType, postId }: { postType: MainCategory; postId: string }): Promise<Comment[]> => {
    const res = await fetch(COMMENT_API_URL.reply[postType](postId), {
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

/** 댓글 작성 액션 */
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

    const res = await fetch(COMMENT_API_URL.create[postType](postId), {
      method: "POST",
      headers: AUTHORIZATION_HEADERS(tempAccessToken),
      cache: "no-store",
      body,
    });
  },
);
