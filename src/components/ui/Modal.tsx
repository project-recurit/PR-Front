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

  if (!isMounted || !modalRoot || !isModalOpen) return null;

  return createPortal(
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">{children}</div>,
    modalRoot,
  );
};

export default Modal;
