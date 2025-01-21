"use client";

import useCategoryStore from "@/store/categoryStore";
import { mainCategory } from "@/type/category";

const ActionTap = () => {
  const { selectMenu, selectedMenu } = useCategoryStore();
  return (
    <div className="flex gap-x-[20px] border-b">
      {mainCategory.map((c) => (
        <button
          onClick={() => selectMenu(c)}
          key={c}
          className={`pb-[10px] border-b-[3px] min-w-fit ${
            selectedMenu === c
              ? " border-green-700 text-green-700"
              : "border-transparent"
          }`}
        >
          {c}
        </button>
      ))}
    </div>
  );
};

export default ActionTap;
