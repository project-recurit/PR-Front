"use server";

import { AUTHORIZATION_HEADERS } from "@/config/httpRequestHeaders";
import { NOTIFICATION_API_URL } from "@/constants/apiEndpoints";
import { tempAccessToken } from "@/data/tempAccessToken";
import { Notification } from "@/types/notificationTypes";
import { handleError } from "@/utils/errorHandler";

export const getNotification = handleError(async (): Promise<Notification[]> => {
  const res = await fetch(NOTIFICATION_API_URL(), {
    method: "GET",
    headers: AUTHORIZATION_HEADERS(tempAccessToken),
    cache: "no-store",
  });
  return await res.json();
});
