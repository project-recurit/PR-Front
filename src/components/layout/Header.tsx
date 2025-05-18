"use client";

import { ChevronLeft } from "@/assets/svgs/icons";
import { useRouter } from "next/navigation";

interface HeaderProps {
  heading?: string;
  backButtonEvent?: () => void;
}

const Header = ({ heading, backButtonEvent }: HeaderProps) => {
  const router = useRouter();
  return (
    <header className="sticky top-0 title-20-s flex h-48 w-full items-center px-16 py-9 bg-white">
      <button onClick={backButtonEvent ?? router.back}>
        <ChevronLeft />
      </button>
      <h1>{heading}</h1>
    </header>
  );
};

export default Header;
