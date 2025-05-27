import { COMMON_HEADERS } from "@/config/httpRequestHeaders";
import { POST_API_URL } from "@/constants/apiEndpoints";
import { handleError } from "@/utils/errorHandler";

/** 지원서 작성 액션 */
export const applayProject = handleError(async ({ pjId, position }) => {
  const res = await fetch(POST_API_URL.application.apply(pjId), {
    method: "POST",
    headers: COMMON_HEADERS,
    cache: "no-store",
    body: JSON.stringify({ position }),
  });
});
