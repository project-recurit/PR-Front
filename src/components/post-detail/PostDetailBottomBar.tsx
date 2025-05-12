"use client";

import ActionBotton from "../ui/ActionBotton";
import ApplyProject from "./ApplyProject";
import { useModal } from "@/hooks/modal/useModal";
import { BOTTOM_FIEXED_BAR_STYLE } from "@/styles/tailwindStyles";

interface PostDetailBottomBarProps {
  isPJPost: boolean;
}

const PostDetailBottomBar = ({ isPJPost }: PostDetailBottomBarProps) => {
  const { Modal, isModalOpen, openModal, closeModal } = useModal();
  return (
    <>
      <footer className={BOTTOM_FIEXED_BAR_STYLE}>
        <ActionBotton
          label="채팅하기"
          size={isPJPost ? "m" : "l"}
          color={isPJPost ? "white" : "black"}
          onClick={() => {}}
        />
        {isPJPost && (
          <ActionBotton
            label="지원하기"
            size="m"
            onClick={openModal}
          />
        )}
      </footer>
      <Modal isModalOpen={isModalOpen}>
        <ApplyProject closeModal={closeModal} />
      </Modal>
    </>
  );
};

export default PostDetailBottomBar;
