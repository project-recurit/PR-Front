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
    <header className="title-20-s sticky top-0 flex h-48 w-full items-center bg-white px-16 py-9">
      <button onClick={backButtonEvent ?? router.back}>
        <ChevronLeft />
      </button>
      <h1>{heading}</h1>
    </header>
  );
};

export default Header;
