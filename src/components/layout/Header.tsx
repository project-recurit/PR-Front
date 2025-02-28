"use client";

import ActionTap from "../Home/ActionTap";
import { HIDDEN_PATH } from "@/assets/constantData";
import { usePathname } from "next/navigation";

const Header = () => {
  const path = usePathname();

  return (
    <header className={`sticky top-0 z-10 flex flex-col bg-white ${HIDDEN_PATH.includes(path) && "hidden"}`}>
      <div className="px-20 py-9 font-pretendard text-24 font-black leading-tight">LOGO</div>
      <ActionTap />
    </header>
  );
};

export default Header;
