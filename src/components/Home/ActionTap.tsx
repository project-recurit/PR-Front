"use client";

import useCategoryStore from "@/store/categoryStore";
import { mainCategory } from "@/type/category";

const ActionTap = () => {
  const { selectMenu, selectedMenu } = useCategoryStore();
  return (
    <div className="flex gap-x-[20px] px-[20px] border-b-[1px] sticky top-[58px] z-10 border-deep-gray">
      {mainCategory.map((c) => (
        <button
          onClick={() => selectMenu(c)}
          key={c}
          className={`min-w-fit flex-col flex items-center body-14-s mb-[4px]`}
        >
          {c}
          <div
            className={`h-[3px] w-[30px] rounded-full absolute -bottom-[2px] ${
              selectedMenu === c ? "bg-green-600" : "bg-transparent"
            }`}
          ></div>
        </button>
      ))}
    </div>
  );
};

export default ActionTap;
