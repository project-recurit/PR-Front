import NOTIFICATION_QUERY_KEYS from "../queryKeys/notificationQueryKeys";
import { getNotification } from "@/actions/notificationActions";
import { useQuery } from "@tanstack/react-query";

/** 알림 쿼리 */
export const useGetNotifications = () => {
  return useQuery({
    queryKey: NOTIFICATION_QUERY_KEYS,
    queryFn: () => getNotification(),
  });
};
