"use client";

import { MAIN_CATEGORY } from "@/assets/constantData";
import useCategoryStore from "@/store/categoryStore";
import { usePathname } from "next/navigation";

const ActionTap = () => {
  const path = usePathname();
  const { selectMenu, selectedMenu } = useCategoryStore();
  return (
    <div
      className={`flex gap-x-20 px-20 border-b-1 z-10 sticky border-black-300 pt-13 ${
        path !== "/" && "hidden"
      }`}
    >
      {MAIN_CATEGORY.map((c) => (
        <button
          onClick={() => selectMenu(c)}
          key={c}
          className={`min-w-fit flex-col flex items-center body-14-s mb-4`}
        >
          {c}
          <div
            className={`h-3 w-39 rounded-full absolute -bottom-2 ${
              selectedMenu === c ? "bg-green-600" : "bg-transparent"
            }`}
          ></div>
        </button>
      ))}
    </div>
  );
};

export default ActionTap;
