"use server";

import { commonHeaders } from "@/config/commonHeaders";
import { POST_API_URL } from "@/constants/apiEndpoints";
import type { MainCategory } from "@/types/filterTypes";
import type { PJPost, PRPost } from "@/types/postTypes";
import { handleError } from "@/utils/handleError";

//TODO - 검색, 필터, 페이지네이션 기능 추가 필요
/** 게시물 리스트 요청 액션 */
export const getPosts = handleError(async ({ postType }: { postType: MainCategory }): Promise<PJPost[] | PRPost[]> => {
  const res = await fetch(POST_API_URL.list[postType], {
    method: "GET",
    headers: commonHeaders,
    cache: "no-store",
  });
  const {
    data: { content },
  } = await res.json();
  return content;
});

/** 게시물 상세 요청 액션 */
export const getPostDetail = handleError(
  async ({ postType, postId }: { postType: MainCategory; postId: string }): Promise<PJPost | PRPost> => {
    const res = await fetch(POST_API_URL.detail[postType](postId), {
      method: "GET",
      headers: commonHeaders,
      cache: "no-store",
    });
    const { data } = await res.json();
    return data;
  },
);
