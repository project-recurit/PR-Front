import { COMMON_HEADERS } from "@/config/httpRequestHeaders";
import { ALERT_API_URL } from "@/constants/apiEndpoints";
import { handleError } from "@/utils/errorHandler";

export const getAlert = handleError(async (): Promise<[]> => {
  const res = await fetch(ALERT_API_URL(), {
    method: "GET",
    headers: COMMON_HEADERS,
    cache: "no-store",
  });
  const {
    data: { content },
  } = await res.json();
  return content;
});
