"use client";

import { MAIN_CATEGORY } from "@/assets/constantData";
import { useCategoryStore } from "@/hooks/State/useCategoryStore";
import { usePathname } from "next/navigation";

const CategoryTab = () => {
  const path = usePathname();
  const { selectedMenu, selectMenu } = useCategoryStore((state) => state);

  return (
    <div className={`sticky z-10 flex gap-x-20 border-b-1 border-black-300 px-20 pt-13 ${path !== "/" && "hidden"}`}>
      {MAIN_CATEGORY.map((c) => (
        <button
          onClick={() => selectMenu(c)}
          key={c}
          className={`body-14-s mb-4 flex min-w-fit flex-col items-center`}
        >
          {c}
          <div
            className={`absolute -bottom-2 h-3 w-39 rounded-full ${
              selectedMenu === c ? "bg-green-600" : "bg-transparent"
            }`}
          ></div>
        </button>
      ))}
    </div>
  );
};

export default CategoryTab;
