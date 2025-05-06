"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  children: React.ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const modalRoot = document.getElementById("modal-root");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted || !modalRoot) return null;

  return createPortal(<>{children}</>, modalRoot);
};

export default Modal;
