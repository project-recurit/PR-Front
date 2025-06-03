"use client";

import { NAV_MENU } from "@/constants/navMenus";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavigationBar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 flex h-56 w-full justify-between bg-white px-40 py-8">
      {NAV_MENU.map(({ label, Icon, path }) => (
        <Link
          href={path}
          key={label}
          className={`flex flex-col items-center justify-center gap-y-4 ${
            pathname === path ? "text-black-1000" : "text-black-400"
          }`}
        >
          <Icon />
          <span className="caption-10-s">{label}</span>
        </Link>
      ))}
    </nav>
  );
};

export default NavigationBar;
