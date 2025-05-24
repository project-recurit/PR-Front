"use client";

import Botton from "../ui/Botton";
import Modal from "../ui/Modal";
import ApplyProject from "./ApplyProject";
import { useDisclosure } from "@/hooks/disclosure/useDisclosure";
import { BOTTOM_FIEXED_BAR_STYLE } from "@/styles/tailwindStyles";
import { useSearchParams } from "next/navigation";

const PostDetailBottomBar = () => {
  const { isOpen: isModalOpen, open: openModal, close: closeModal } = useDisclosure();
  const searchParams = useSearchParams();
  const isPJPost = searchParams.get("type") === "PJ";

  return (
    <>
      <footer className={BOTTOM_FIEXED_BAR_STYLE}>
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
