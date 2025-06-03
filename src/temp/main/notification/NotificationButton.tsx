"use client";

import NotificationSheet from "./NotificationSheet";
import { Bell } from "@/assets/svgs/icons";
import { useDisclosure } from "@/hooks/disclosure/useDisclosure";
import Modal from "@/temp/ui/Modal";

const NotificationButton = () => {
  const { isOpen: isModalOpen, open: openModal, close: closeModal } = useDisclosure();

  return (
    <>
      <button onClick={openModal}>
        <Bell />
      </button>

      <Modal isModalOpen={isModalOpen}>
        <NotificationSheet closeModal={closeModal} />
      </Modal>
    </>
  );
};

export default NotificationButton;
