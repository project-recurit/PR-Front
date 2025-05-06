"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  children: React.ReactNode;
  isModalOpen: boolean;
}

const Modal = ({ children, isModalOpen }: ModalProps) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const modalRoot = document.getElementById("modal-root");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted || !modalRoot) return null;

  return isModalOpen ? createPortal(<>{children}</>, modalRoot) : null;
};

export default Modal;
