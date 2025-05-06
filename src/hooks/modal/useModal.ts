import Modal from "@/components/modal/Modal";
import { useState } from "react";

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return { Modal, isModalOpen, openModal, closeModal };
};
