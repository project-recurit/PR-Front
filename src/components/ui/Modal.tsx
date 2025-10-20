"use client";

import useLockBodyScroll from "@/hooks/useLockBodyScroll";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  children: ReactNode;
  isModalOpen: boolean;
  backdropClose?: boolean;
  closeModal: () => void;
}

const Modal = ({ children, isModalOpen, backdropClose = true, closeModal }: ModalProps) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const modalRootRef = useRef<HTMLElement | null>(null);
  useLockBodyScroll(isModalOpen);

  useEffect(() => {
    modalRootRef.current = document.getElementById("modal-root");
    setIsMounted(true);
  }, []);

  if (!isMounted || !modalRootRef.current || !isModalOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-900 bg-opacity-50"
      onClick={backdropClose ? closeModal : undefined}
    >
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>,
    modalRootRef.current,
  );
};

export default Modal;
