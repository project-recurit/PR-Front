"use client";

const CenterModal = ({ onClose, children }: { onClose: () => void; children: React.ReactNode }) => {
  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onClose();
  };
  return (
    <div
      onClick={handleClose}
      className="fixed z-10 flex h-screen w-screen items-center justify-center bg-black/50 blur-md"
    >
      <div className="bg-white px-24 py-20">{children}</div>
    </div>
  );
};

export default CenterModal;
