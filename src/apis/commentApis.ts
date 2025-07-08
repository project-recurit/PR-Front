import { AUTHORIZATION_HEADERS, COMMON_HEADERS } from "@/config/httpRequestHeaders";
import { COMMENT_API_URL } from "@/constants/apiEndpoints";
import { tempAccessToken } from "@/constants/tempAccessToken";
import type { Comment, CreateCommentParams, ParentTargetParams, PostTargetParams } from "@/types";
import { handleError } from "@/utils/handleError";

/** 댓글 요청 api */
export const getCommentListApi = handleError(async ({ postType, postId }: PostTargetParams): Promise<Comment[]> => {
  const res = await fetch(COMMENT_API_URL[postType](postId), {
    method: "GET",
    headers: COMMON_HEADERS,
    cache: "no-store",
  });
  const {
    data: { content },
  } = await res.json();
  return content;
});

/** 대댓글 요청 api */
export const getReplyCommentsApi = handleError(
  async ({ postType, parentId }: ParentTargetParams): Promise<Comment[]> => {
    const res = await fetch(COMMENT_API_URL.reply[postType](parentId), {
      method: "GET",
      headers: COMMON_HEADERS,
      cache: "no-store",
    });
    const { data } = await res.json();
    return data;
  },
);

/** 댓글 작성 api */
export const createCommentApi = handleError(async ({ postType, postId, comment, parentId }: CreateCommentParams) => {
  const body = JSON.stringify({
    content: comment,
    ...(parentId && { parentId }),
  });

  //TODO - useSession 사용

  return await fetch(COMMENT_API_URL.create[postType](postId), {
    method: "POST",
    headers: AUTHORIZATION_HEADERS(tempAccessToken),
    cache: "no-store",
    body,
  });
});
