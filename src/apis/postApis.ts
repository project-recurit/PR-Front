import { COMMON_HEADERS } from "@/config/httpRequestHeaders";
import { POST_API_URL } from "@/constants/apiEndpoints";
import type { MainCategory } from "@/types/filterTypes";
import type { PJPost, PRPost } from "@/types/postTypes";
import { handleError } from "@/utils/errorHandler";

//TODO - 검색, 필터, 페이지네이션 기능 추가
/** 게시물 리스트 요청 액션 */
export const getPosts = handleError(
  async <T extends MainCategory>({ postType }: { postType: T }): Promise<T extends "PJ" ? PJPost[] : PRPost[]> => {
    const res = await fetch(POST_API_URL[postType], {
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

/** 게시물 상세 요청 액션 */
export const getPostDetail = handleError(
  async <T extends MainCategory>({
    postType,
    postId,
  }: {
    postType: T;
    postId: string;
  }): Promise<T extends "PJ" ? PJPost : PRPost> => {
    const res = await fetch(POST_API_URL.detail[postType](postId), {
      method: "GET",
      headers: COMMON_HEADERS,
      cache: "no-store",
    });
    const { data } = await res.json();
    console.log(" data => ", data);
    return data;
  },
);
