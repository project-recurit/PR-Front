"use client";

import Header from "@/components/layout/Header";

interface NotificationSheetProps {
  closeModal: () => void;
}

const NotificationSheet = ({ closeModal }: NotificationSheetProps) => {
  return (
    <div className="z-50 h-screen w-screen bg-white">
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
