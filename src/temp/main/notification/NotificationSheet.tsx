"use client";

import { useGetNotifications } from "@/hooks/tanstack/queries/useGetNotifications";
import Header from "@/temp/layout/Header";

interface NotificationSheetProps {
  closeModal: () => void;
}

const NotificationSheet = ({ closeModal }: NotificationSheetProps) => {
  const { data: notificationData } = useGetNotifications();
  console.log(" notificationData => ", notificationData);

  return (
    <div className="h-screen w-screen bg-white">
      <Header backButtonEvent={closeModal} />
      <div>
        <div>
          <h3>새로운 알림</h3>
          {/* <NotificationCard /> */}
        </div>
        <div>
          <h3>지난 알림</h3>
        </div>
      </div>
    </div>
  );
};

export default NotificationSheet;
