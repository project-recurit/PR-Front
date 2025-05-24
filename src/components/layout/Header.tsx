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
    <header className="sticky top-0 bg-white flex items-center w-full h-48 px-16 title-20-s py-9">
      <button onClick={backButtonEvent ?? router.back}>
        <ChevronLeft />
      </button>
      <h1>{heading}</h1>
    </header>
  );
};

export default Header;
