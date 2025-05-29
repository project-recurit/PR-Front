import { COMMON_HEADERS } from "@/config/httpRequestHeaders";
import { TECH_STACK_API_URL } from "@/constants/apiEndpoints";
import { handleError } from "@/utils/errorUtils";

/** 기술 스택 요청 api */
export const getTeckStacksApi = handleError(async () => {
  try {
    const res = await fetch(TECH_STACK_API_URL, {
      method: "GET",
      headers: COMMON_HEADERS,
      cache: "no-store",
    });
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error(error);
    return;
  }
});
