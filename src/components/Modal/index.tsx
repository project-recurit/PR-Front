"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  children: React.ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  const [mounted, setMounted] = useState(false);
  const modalRoot = document.getElementById("modal-root");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !modalRoot) return null;

  return createPortal(<>{children}</>, modalRoot);
};

export default Modal;
