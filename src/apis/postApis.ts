import { COMMON_HEADERS } from "@/config/httpRequestHeaders";
import { POST_API_URL } from "@/constants/apiEndpoints";
import type { GetPostDetailParams, GetPostListParams, PJPost, PostType, PRPost } from "@/types/postTypes";
import { handleError } from "@/utils/handleError";

//TODO - 검색, 필터, 페이지네이션 기능 추가
/** 게시물 리스트 요청 api */
export const getPostListApi = handleError(
  async <T extends PostType>({ postType }: GetPostListParams<T>): Promise<T extends "PJ" ? PJPost[] : PRPost[]> => {
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

/** 게시물 상세 요청 api */
export const getPostDetailApi = handleError(
  async <T extends PostType>({
    postType,
    postId,
  }: GetPostDetailParams<T>): Promise<T extends "PJ" ? PJPost : PRPost> => {
    const res = await fetch(POST_API_URL.detail[postType](postId), {
      method: "GET",
      headers: COMMON_HEADERS,
      cache: "no-store",
    });
    const { data } = await res.json();
    return data;
  },
);
