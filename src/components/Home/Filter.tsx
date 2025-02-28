"use client";

import Modal from "../Modal";
import FilterSheet from "./FilterSheet";
import { FILTER_MENU } from "@/assets/constantData";
import { useState } from "react";

const Filter = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="flex gap-x-8 px-16 py-16 shadow-[0_3px_5px_0_rgba(0,0,0,0.04)]">
      {FILTER_MENU.slice(0, 3).map(({ category }) => (
        <button
          key={category}
          className={"caption-s rounded-full px-16 py-8"}
          onClick={() => setIsFilterOpen(true)}
        >
          {category}
        </button>
      ))}
      {isFilterOpen && (
        <Modal>
          <FilterSheet setIsFilterOpen={setIsFilterOpen} />
        </Modal>
      )}
    </div>
  );
};

export default Filter;
