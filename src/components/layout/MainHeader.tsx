"use client";

import CategoryTab from "../home/filterPanel/CategoryTab";
import NotificationSheet from "../home/notification/NotificationSheet";
import { Bell } from "@/assets/svgs/icons";
import ROUTES from "@/constants/routes";
import { useModal } from "@/hooks/modal/useModal";
import Link from "next/link";

const MainHeader = () => {
  const { Modal, isModalOpen, openModal, closeModal } = useModal();

  return (
    <>
      <header className="sticky top-0 z-10 bg-white flex flex-col">
        <div className="flex justify-between px-20 py-9">
          <Link
            href={ROUTES.home}
            className="font-black leading-tight text-24"
          >
            LOGO
          </Link>
          <button onClick={openModal}>
            <Bell />
          </button>
        </div>
        <CategoryTab />
      </header>

      <Modal isModalOpen={isModalOpen}>
        <NotificationSheet closeModal={closeModal} />
      </Modal>
    </>
  );
};

export default MainHeader;
