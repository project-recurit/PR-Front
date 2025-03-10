"use server";

import type { POST_TYPE } from "@/assets/constantData";
import { commonHeaders } from "@/config/commonHeaders";
import { POST_API_URL } from "@/constants/apiEndpoints";

/** 게시물 리스트 요청 */
export const getPJPosts = async (postType: POST_TYPE) => {
  const res = await fetch(POST_API_URL[postType], {
    method: "GET",
    headers: commonHeaders,
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};
