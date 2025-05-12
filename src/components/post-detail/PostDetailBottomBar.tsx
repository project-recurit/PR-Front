"use client";

import ActionBotton from "../ui/ActionBotton";
import ApplyProject from "./ApplyProject";
import { useModal } from "@/hooks/modal/useModal";
import { BOTTOM_FIEXED_BAR_STYLE } from "@/styles/tailwindStyles";

interface PostDetailBottomBarProps {
  isPjPost: boolean;
}

const PostDetailBottomBar = ({ isPjPost }: PostDetailBottomBarProps) => {
  const { Modal, isModalOpen, openModal, closeModal } = useModal();
  return (
    <>
      <footer className={BOTTOM_FIEXED_BAR_STYLE}>
        <ActionBotton
          label="채팅하기"
          size={isPjPost ? "m" : "l"}
          color={isPjPost ? "white" : "black"}
          onClick={() => {}}
        />
        {isPjPost && (
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
