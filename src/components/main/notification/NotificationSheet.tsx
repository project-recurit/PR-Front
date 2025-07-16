"use client";

import NotificationCard from "./NotificationCard";
import Header from "@/components/layout/Header";
import { useGetNotificationsQuery } from "@/hooks/tanstack/queries/useGetNotifications";

interface NotificationSheetProps {
  closeModal: () => void;
}

const NotificationSheet = ({ closeModal }: NotificationSheetProps) => {
  const { data: notificationData,isPending,isError,error } = useGetNotificationsQuery();
  console.log(" notificationData => ", notificationData);

  if(isPending) return <div>로딩 중입니다.</div>;

  if(isError) throw new Error(error.message);

  const newNotifications = notificationData.filter(n => !n.isRead);
const oldNotifications = notificationData.filter(n => n.isRead);

  return (
    <div className="h-screen w-screen bg-white">
      <Header backButtonEvent={closeModal} />
      <div>
        <section>
          <h2>새로운 알림</h2>
          {newNotifications.map((notification) => (
            <NotificationCard key={notification.notificationId} {...notification} />
          ))}
        </section>
        <section>
          <h2>지난 알림</h2>
          {oldNotifications.map((notification) => (
            <NotificationCard key={notification.notificationId} {...notification} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default NotificationSheet;
