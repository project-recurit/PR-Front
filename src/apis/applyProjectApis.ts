import { COMMON_HEADERS } from "@/config/httpRequestHeaders";
import { POST_API_URL } from "@/constants/apiEndpoints";
import { handleError } from "@/utils/handleError";

/** 지원서 작성 api */
export const applayProjectApi = handleError(async ({ pjId, position }) => {
  return await fetch(POST_API_URL.application.apply(pjId), {
    method: "POST",
    headers: COMMON_HEADERS,
    cache: "no-store",
    body: JSON.stringify({ position }),
  });
});
