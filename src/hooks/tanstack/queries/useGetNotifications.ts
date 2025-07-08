import NOTIFICATION_QUERY_KEYS from "../queryKeys/notificationQueryKeys";
import { getNotificationApi } from "@/apis/notificationApis";
import { useQuery } from "@tanstack/react-query";

/** 알림 쿼리 */
export const useGetNotificationsQuery = () => {
  return useQuery({
    queryKey: NOTIFICATION_QUERY_KEYS,
    queryFn: () => getNotificationApi(),
  });
};
