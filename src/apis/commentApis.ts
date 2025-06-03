import { AUTHORIZATION_HEADERS, COMMON_HEADERS } from "@/config/httpRequestHeaders";
import { COMMENT_API_URL } from "@/constants/apiEndpoints";
import { tempAccessToken } from "@/constants/tempAccessToken";
import type { Comment } from "@/types/commentTypes";
import type { PostType } from "@/types/postTypes";
import { handleError } from "@/utils/handleError";

/** 댓글 요청 api */
export const getCommentsApi = handleError(
  async ({ postType, postId }: { postType: PostType; postId: string }): Promise<Comment[]> => {
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

/** 대댓글 요청 api */
export const getReplyCommentsApi = handleError(
  async ({ postType, postId }: { postType: PostType; postId: string }): Promise<Comment[]> => {
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

/** 댓글 작성 api */
export const createCommentApi = handleError(
  async ({
    postType,
    postId,
    comment,
    parentId,
  }: {
    postType: PostType;
    postId: string;
    comment: string;
    parentId?: number;
  }) => {
    const body = JSON.stringify({
      content: comment,
      ...(parentId && { parentId }),
    });

    return await fetch(COMMENT_API_URL.create[postType](postId), {
      method: "POST",
      headers: AUTHORIZATION_HEADERS(tempAccessToken),
      cache: "no-store",
      body,
    });
  },
);
