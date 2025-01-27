"use client";

import useCategoryStore from "@/store/categoryStore";
import { FILTER_MENU } from "@/assets/constantData";

const Filter = () => {
  const { selectFilter, selectedFilter } = useCategoryStore();

  return (
    <div className="flex gap-x-8 py-16 px-16 shadow-[0_3px_5px_0_rgba(0,0,0,0.04)]">
      {FILTER_MENU.map((m) => (
        <button
          onClick={() => selectFilter(m)}
          key={m}
          className={`px-16 py-8 rounded-full caption-s ${
            m === selectedFilter ? "bg-black-100" : "bg-white"
          }`}
        >
          {m}
        </button>
      ))}
    </div>
  );
};

export default Filter;
