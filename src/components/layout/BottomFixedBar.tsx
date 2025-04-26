"use client";

interface BottomFixedBarProps {
  postType?: "pj" | "pr";
}

const BottomFixedBar = ({ postType }: BottomFixedBarProps) => {
  return (
    <footer className="main-contain fixed bottom-0 flex h-56 w-full justify-between bg-white px-40 py-8">
      {postType}
    </footer>
  );
};

export default BottomFixedBar;
