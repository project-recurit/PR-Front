"use client";

import { NAV_MENU } from "@/assets/constantData";
import { useRouter } from "next/navigation";

const NavigationBar = () => {
  const route = useRouter();
  return (
    <nav className="fixed bottom-0 w-full bg-white h-56  main-contain flex px-40 py-8 justify-between">
      {NAV_MENU.map((m) => (
        <button
          key={m.title}
          className="flex flex-col justify-center items-center gap-y-4"
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
