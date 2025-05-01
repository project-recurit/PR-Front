import { commonHeaders } from "@/config/commonHeaders";
import { COMMENT_API_URL } from "@/constants/apiEndpoints";
import { handleError } from "@/utils/handleError";

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
