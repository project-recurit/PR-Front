import { AUTHORIZATION_HEADERS } from "@/config/httpRequestHeaders";
import { NOTIFICATION_API_URL } from "@/constants/apiEndpoints";
import { tempAccessToken } from "@/constants/componentsAccessToken";
import { Notification } from "@/types/notificationTypes";
import { handleError } from "@/utils/handleError";

/** 알림 요청 api */
export const getNotificationApi = handleError(async (): Promise<Notification[]> => {
  const res = await fetch(NOTIFICATION_API_URL(), {
    method: "GET",
    headers: AUTHORIZATION_HEADERS(tempAccessToken),
    cache: "no-store",
  });
  return await res.json();
});
