"use client";

import ApplyProject from "../../ApplyProject";
import Botton from "@/components/ui/Botton";
import Modal from "@/components/ui/Modal";
import { useDisclosure } from "@/hooks/disclosure/useDisclosure";

const PJPostBottomBar = () => {
  const { isOpen: isModalOpen, open: openModal, close: closeModal } = useDisclosure();

  return (
    <>
      <footer className="fixed bottom-0 flex w-full justify-center gap-16 border-t border-gray-200 bg-white px-16 py-8">
        <Botton
          className="flex-1"
          color={"white"}
          onClick={() => {}}
        >
          채팅하기
        </Botton>
        <Botton
          className="flex-1"
          onClick={openModal}
        >
          지원하기
        </Botton>
      </footer>
      <Modal isModalOpen={isModalOpen}>
        <ApplyProject closeModal={closeModal} />
      </Modal>
    </>
  );
};

export default PJPostBottomBar;
