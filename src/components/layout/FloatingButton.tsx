"use client";

import FloatingModal from "./FloatingModal";
import { HIDDEN_PATH } from "@/assets/constantData";
import { Plus } from "@/assets/icons";
import { useModalControl } from "@/hooks/modalControl";
import { usePathname } from "next/navigation";
import { useRef } from "react";

const FloatingButton = () => {
  const path = usePathname();

  const { isModalOpen, toggleModal, closeModal } = useModalControl();
  const buttonRef = useRef<HTMLDivElement | null>(null);
  return (
    <div className={`main-contain fixed bottom-0 w-full ${HIDDEN_PATH.includes(path) && "hidden"}`}>
      <div
        onClick={toggleModal}
        className="absolute bottom-75 right-10 flex h-50 w-50 items-center justify-center rounded-full bg-black"
      >
        <Plus />
      </div>
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
