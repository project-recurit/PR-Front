"use client";

import { usePathname } from "next/navigation";
import ActionTap from "../Home/ActionTap";
import { HIDDEN_PATH } from "@/assets/constantData";

const Header = () => {
  const path = usePathname();

  return (
    <header
      className={`flex flex-col sticky top-0 z-10 bg-white ${
        HIDDEN_PATH.includes(path) && "hidden"
      }`}
    >
      <div className="font-pretendard font-black text-24 px-20 py-9 leading-tight">
        LOGO
      </div>
      <ActionTap />
    </header>
  );
};

export default Header;
