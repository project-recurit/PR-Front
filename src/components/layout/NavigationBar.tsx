"use client";

import { NAV_MENU } from "@/data/navMenuData";
import { usePathname, useRouter } from "next/navigation";

const NavigationBar = () => {
  const path = usePathname();
  const route = useRouter();

  return (
    <nav
      className="fixed bg-white bottom-0 flex h-56 w-full justify-between px-40 py-8 
      "
    >
      {NAV_MENU.map((m) => (
        <button
          key={m.title}
          className={`flex flex-col items-center justify-center gap-y-4 ${
            path === m.route ? "text-black-1000" : "text-black-400"
          }`}
          onClick={() => route.push(m.route)}
        >
          <m.Component />
          <p className="caption-10-s">{m.title}</p>
        </button>
      ))}
    </nav>
  );
};

export default NavigationBar;
