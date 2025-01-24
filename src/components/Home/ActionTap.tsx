"use client";

import useCategoryStore from "@/store/categoryStore";
import { mainCategory } from "@/types/category";

const ActionTap = () => {
  const { selectMenu, selectedMenu } = useCategoryStore();
  return (
    <div className="flex gap-x-20 px-20 border-b-1 sticky top-58 z-10 border-deep-gray">
      {mainCategory.map((c) => (
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
