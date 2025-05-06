"use client";

import { HIDDEN_PATH } from "@/assets/constantData";
import { Plus } from "@/assets/icons";
import { usePathname } from "next/navigation";

const FloatingButton = () => {
  const path = usePathname();

  return (
    <div className={`main-contain fixed bottom-0 w-full ${HIDDEN_PATH.includes(path) && "hidden"}`}>
      {/* TODO - 모집글로 이동 Link */}
      <div
        className="absolute bottom-75 right-10 flex h-50 w-50 items-center justify-center rounded-full bg-black"
      >
        <Plus />
      </div>
    </div>
  );
};

export default FloatingButton;
