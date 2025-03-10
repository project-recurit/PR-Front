"use client";

import Modal from "../../Common/Modal";
import SelectChip from "../../Common/SelectChip";
import FilterSheet from "./FilterSheet";
import { ChevronDown, FilterFunnel } from "@/assets/icons";
import { useCategoryStore } from "@/hooks/State/useCategoryStore";
import { useState } from "react";

const Filter = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { activeFilters, applyFilter } = useCategoryStore((state) => state);

  return (
    <>
      <div className="flex h-48 justify-between px-16 py-8 shadow-[0_3px_5px_0_rgba(0,0,0,0.04)]">
        <div className="flex items-center gap-10 overflow-x-auto">
          {activeFilters.size > 0 &&
            [...activeFilters].map((filter) => {
              return (
                <SelectChip
                  size="s"
                  key={filter}
                  content={filter}
                  active={true}
                  onClick={() => applyFilter(new Set([...activeFilters].filter((f) => f !== filter)))}
                />
              );
            })}
        </div>
        <button onClick={() => setIsFilterOpen(true)}>
          <FilterFunnel />
        </button>
      </div>
      <div className="flex justify-end bg-black-100 px-16 py-12">
        <button className="flex items-center gap-4 p-8">
          <span className="caption-s">최신순</span>
          <ChevronDown className="h-16 w-16" />
        </button>
      </div>
      {isFilterOpen && (
        <Modal>
          <FilterSheet setIsFilterOpen={setIsFilterOpen} />
        </Modal>
      )}
    </>
  );
};

export default Filter;
