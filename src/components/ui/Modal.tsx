"use client";

import useLockBodyScroll from "@/hooks/useLockBodyScroll";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  children: React.ReactNode;
  isModalOpen: boolean;
}

const Modal = ({ children, isModalOpen }: ModalProps) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const modalRoot = document.getElementById("modal-root");
  useLockBodyScroll(isModalOpen)

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted || !modalRoot || !isModalOpen) return null;

  return createPortal(
    <div className="fixed z-50 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">{children}</div>,
    modalRoot,
  );
};

export default Modal;
