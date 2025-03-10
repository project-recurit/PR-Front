import { useEffect, useRef } from "react";

const FloatingModal = ({
  onClose,
  isOpen,
  buttonRef,
}: {
  onClose: () => void;
  isOpen: boolean;
  buttonRef: React.RefObject<HTMLDivElement | null>;
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (
        buttonRef.current &&
        modalRef.current &&
        !buttonRef.current.contains(e.target as Node) &&
        !modalRef.current.contains(e.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose, buttonRef]);

  return (
    <div
      ref={modalRef}
      className="absolute bottom-130 right-15 z-20 flex flex-col rounded-md bg-gray-200 px-20 py-12"
    >
      <p>프로젝트 팀원 구하기</p>
      <p>참여할 프로젝트 구하기</p>
    </div>
  );
};

export default FloatingModal;
