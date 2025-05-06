"use client";

import { NAV_MENU } from "@/assets/constantData";
import { usePathname, useRouter } from "next/navigation";

const NavigationBar = () => {
  const path = usePathname();
  const route = useRouter();

  return (
    //REVIEW - hidden은 보이지만 않고 렌더링이 되므로 다른 방식이 더 좋을 것 같음
    <nav
      className="main-contain fixed bottom-0 flex h-56 w-full justify-between bg-white px-40 py-8 
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
          <p className="caption-10">{m.title}</p>
        </button>
      ))}
    </nav>
  );
};

export default NavigationBar;
