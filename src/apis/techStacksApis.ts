import { COMMON_HEADERS } from "@/config/httpRequestHeaders";
import { TECH_STACK_API_URL } from "@/constants/apiEndpoints";
import { handleError } from "@/utils/handleError";

/** 기술 스택 요청 api */
export const getTechStacksApi = handleError(async () => {
  const res = await fetch(TECH_STACK_API_URL, {
    method: "GET",
    cache: "force-cache",
    headers: COMMON_HEADERS,
  });
  const { data } = await res.json();
  return data;
});
