"use client";

import useLockBodyScroll from "@/hooks/useLockBodyScroll";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  children: ReactNode;
  isModalOpen: boolean;
}

const Modal = ({ children, isModalOpen }: ModalProps) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const modalRootRef = useRef<HTMLElement | null>(null);
  useLockBodyScroll(isModalOpen);

  useEffect(() => {
    modalRootRef.current = document.getElementById("modal-root");
    setIsMounted(true);
  }, []);

  if (!isMounted || !modalRootRef.current || !isModalOpen) return null;

  return createPortal(
    <div className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 transform">{children}</div>,
    modalRootRef.current,
  );
};

export default Modal;
