"use client";

import ApplyProject from "../../ApplyProject";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import { useDisclosure } from "@/hooks/disclosure/useDisclosure";

interface PJPostBottomBarProps {
  id: number;
}
const PJPostBottomBar = ({ id }: PJPostBottomBarProps) => {
  const { isOpen: isModalOpen, open: openModal, close: closeModal } = useDisclosure();

  return (
    <>
      <footer className="fixed bottom-0 flex w-full justify-center gap-16 border-t border-gray-200 bg-white px-16 py-8">
        <Button
          className="flex-1"
          color={"white"}
          onClick={() => {}}
        >
          채팅하기
        </Button>
        <Button
          className="flex-1"
          onClick={openModal}
        >
          지원하기
        </Button>
      </footer>
      <Modal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
      >
        <ApplyProject
          pjId={id}
          closeModal={closeModal}
        />
      </Modal>
    </>
  );
};

export default PJPostBottomBar;
