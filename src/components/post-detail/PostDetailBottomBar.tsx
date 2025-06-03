"use client";

import Botton from "../ui/Botton";
import Modal from "../ui/Modal";
import ApplyProject from "./ApplyProject";
import { useDisclosure } from "@/hooks/disclosure/useDisclosure";
import { useSearchParams } from "next/navigation";

const PostDetailBottomBar = () => {
  const { isOpen: isModalOpen, open: openModal, close: closeModal } = useDisclosure();
  const searchParams = useSearchParams();
  const isPJPost = searchParams.get("type") === "PJ";

  return (
    <>
      <footer className="fixed bottom-0 w-full justify-center gap-16 border-t border-gray-200 bg-white px-16 py-8">
        <Botton
          size={isPJPost ? "medium" : "large"}
          color={isPJPost ? "white" : "black"}
          onClick={() => {}}
        >
          채팅하기
        </Botton>
        {isPJPost && (
          <Botton
            size="medium"
            onClick={openModal}
          >
            지원하기
          </Botton>
        )}
      </footer>
      <Modal isModalOpen={isModalOpen}>
        <ApplyProject closeModal={closeModal} />
      </Modal>
    </>
  );
};

export default PostDetailBottomBar;
