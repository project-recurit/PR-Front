"use client";

import { useModalControl } from "@/hooks/modalControl";
import FloatingModal from "./FloatingModal";
import { useRef } from "react";

const FloatingButton = () => {
  const { isModalOpen, toggleModal, closeModal } = useModalControl();
  const buttonRef = useRef<HTMLDivElement | null>(null);
  return (
    <div className="w-full fixed bottom-0 main-contain">
      <div
        onClick={toggleModal}
        className="absolute rounded-full w-[50px] h-[50px] bg-black bottom-[75px] right-[10px]"
      ></div>
      {isModalOpen && (
        <FloatingModal
          onClose={closeModal}
          isOpen={isModalOpen}
          buttonRef={buttonRef}
        />
      )}
    </div>
  );
};

export default FloatingButton;
