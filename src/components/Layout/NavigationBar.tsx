"use client";

import { HIDDEN_PATH, NAV_MENU } from "@/assets/constantData";
import { usePathname, useRouter } from "next/navigation";

const NavigationBar = () => {
  const path = usePathname();
  const route = useRouter();

  return (
    <nav
      className={`main-contain fixed bottom-0 flex h-56 w-full justify-between bg-white px-40 py-8 ${
        HIDDEN_PATH.includes(path) && "hidden"
      }`}
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
          <p className="caption-10">{m.title}</p>
        </button>
      ))}
    </nav>
  );
};

export default NavigationBar;
