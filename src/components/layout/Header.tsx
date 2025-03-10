"use client";

import Modal from "../Common/Modal";
import CategoryTab from "../Home/FilterPanel/CategoryTab";
import NotificationSheet from "../Home/Notification/NotificationSheet";
import { HIDDEN_PATH } from "@/assets/constantData";
import { Bell } from "@/assets/icons";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Header = () => {
  const path = usePathname();
  const [isAlertOpen, setIsAlertOpen] = useState<boolean>(false);

  return (
    <>
      <header className={`sticky top-0 z-10 flex flex-col bg-white ${HIDDEN_PATH.includes(path) && "hidden"}`}>
        <div className="flex justify-between px-20 py-9">
          <span className="text-24 font-black leading-tight">LOGO</span>
          <button onClick={() => setIsAlertOpen(true)}>
            <Bell />
          </button>
        </div>
        <CategoryTab />
      </header>
      {isAlertOpen && (
        <Modal>
          <NotificationSheet setIsAlertOpen={setIsAlertOpen} />
        </Modal>
      )}
    </>
  );
};

export default Header;
