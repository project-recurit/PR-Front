import { useState } from "react";

export const useModalControl = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return { isModalOpen, closeModal, openModal, toggleModal };
};
