"use client";

const CenterModal = ({ onClose, children }: { onClose: () => void; children: React.ReactNode }) => {
  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onClose();
  };
  return (
    <div
      onClick={handleClose}
      className="fixed z-10 flex items-center justify-center w-screen h-screen bg-black/50 blur-md"
    >
      <div className="px-24 py-20">{children}</div>
    </div>
  );
};

export default CenterModal;
