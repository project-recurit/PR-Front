import { commonHeaders } from "@/config/commonHeaders";
import { COMMENT_API_URL } from "@/constants/apiEndpoints";
import { handleError } from "@/utils/handleError";

//TODO - 댓글 타입 지정
/** 댓글 요청 액션 */
export const getComments = handleError(async ({ postId }: { postId: string }): Promise<[]> => {
  const res = await fetch(COMMENT_API_URL.root(postId), {
    method: "GET",
    headers: commonHeaders,
    cache: "no-store",
  });
  const {
    data: { content },
  } = await res.json();
  return content;
});

/** 댓글 작성 요청 액션 */
export const createComment = handleError(async ({ postId, comment }: { postId: string; comment: string }) => {
  const res = await fetch(COMMENT_API_URL.create(postId), {
    method: "POST",
    headers: commonHeaders,
    cache: "no-store",
    body: JSON.stringify({ content: comment }),
  });
});
