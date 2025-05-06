"use server";

import { commonHeaders } from "@/config/commonHeaders";
import { POST_API_URL } from "@/constants/apiEndpoints";
import type { MainCategory } from "@/types/filterTypes";
import type { PJPost, PRPost } from "@/types/postTypes";
import { handleError } from "@/utils/handleError";

/** 게시물 리스트 요청 액션 */
export const getPosts = handleError(async (postType: MainCategory): Promise<PJPost[] | PRPost[]> => {
  const res = await fetch(POST_API_URL[postType], {
    method: "GET",
    headers: commonHeaders,
    cache: "no-store",
  });
  const {
    data: { content },
  } = await res.json();
  return content;
});
