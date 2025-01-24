"use client";

const CenterModal = ({
  onClose,
  children,
}: {
  onClose: () => void;
  children: React.ReactNode;
}) => {
  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onClose();
  };
  return (
    <div
      onClick={handleClose}
      className="w-screen h-screen bg-black/50 blur-md fixed z-10 flex justify-center items-center"
    >
      <div className="bg-white px-24 py-20">{children}</div>
    </div>
  );
};

export default CenterModal;
