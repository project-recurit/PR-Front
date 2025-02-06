"use client";

import { useModalControl } from "@/hooks/modalControl";
import FloatingModal from "./FloatingModal";
import { useRef } from "react";
import { usePathname } from "next/navigation";
import { HIDDEN_PATH } from "@/assets/constantData";

const FloatingButton = () => {
  const path = usePathname();

  const { isModalOpen, toggleModal, closeModal } = useModalControl();
  const buttonRef = useRef<HTMLDivElement | null>(null);
  return (
    <div
      className={`w-full fixed bottom-0 main-contain ${
        HIDDEN_PATH.includes(path) && "hidden"
      }`}
    >
      <div
        onClick={toggleModal}
        className="absolute rounded-full w-50 h-50 bg-black bottom-75  right-10 "
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
