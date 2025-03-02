"use client";

import NotificationCard from "./NotificationCard";
import { ChevronLeft } from "@/assets/icons";

interface NotificationSheetProps {
  setIsAlertOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NotificationSheet = ({ setIsAlertOpen }: NotificationSheetProps) => {
  return (
    <div className="z-50 h-screen w-screen bg-white">
      <header className="flex h-48 w-full">
        <button onClick={() => setIsAlertOpen(false)}>
          <ChevronLeft />
        </button>
        <h2>알림</h2>
      </header>
      <div>
        <div>
          <h3>새로운 알림</h3>
          <NotificationCard />
        </div>
        <div>
          <h3>지난 알림</h3>
        </div>
      </div>
    </div>
  );
};

export default NotificationSheet;
