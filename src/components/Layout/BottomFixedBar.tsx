"use client";

interface BottomFixedBarProps {
  children: Readonly<React.ReactNode>;
}

const BottomFixedBar = ({ children }: BottomFixedBarProps) => {
  return (
    <footer className="main-contain fixed bottom-0 flex h-56 w-full justify-between bg-white px-40 py-8">
      {children}
    </footer>
  );
};

export default BottomFixedBar;
