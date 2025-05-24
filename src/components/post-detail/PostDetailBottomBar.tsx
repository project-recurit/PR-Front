"use client";

import Botton from "../ui/Botton";
import ApplyProject from "./ApplyProject";
import { useModal } from "@/hooks/modal/useModal";
import { BOTTOM_FIEXED_BAR_STYLE } from "@/styles/tailwindStyles";
import { useSearchParams } from "next/navigation";

const PostDetailBottomBar = () => {
  const { Modal, isModalOpen, openModal, closeModal } = useModal();
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
