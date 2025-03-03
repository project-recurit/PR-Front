"use client";

import Modal from "../../Common/Modal";
import SelectChip from "../../Common/SelectChip";
import FilterSheet from "./FilterSheet";
import { FILTER_MENU } from "@/assets/constantData";
import { ChevronDown, FilterSort } from "@/assets/icons";
import { useCategoryStore } from "@/hooks/State/useCategoryStore";
import { useState } from "react";

const Filter = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { activeFilters, applyFilter } = useCategoryStore((state) => state);

  return (
    <>
      <div className="flex justify-between gap-x-8 px-16 py-16 shadow-[0_3px_5px_0_rgba(0,0,0,0.04)]">
        {FILTER_MENU.slice(0, 3).map(({ category }) => (
          <button
            key={category}
            className={"caption-s flex items-center gap-8 rounded-full px-16 py-8"}
            onClick={() => setIsFilterOpen(true)}
          >
            {category}
            {/* TODO - 사이즈 16 */}
            <ChevronDown
              width="16"
              height="16"
            />
          </button>
        ))}
        <button>
          <FilterSort />
        </button>
      </div>
      {activeFilters.size > 0 && (
        <div className="flex h-48 w-full items-center gap-10 overflow-x-auto border-y-[0.5px] px-16 py-8">
          {[...activeFilters].map((filter) => {
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
      )}
      {isFilterOpen && (
        <Modal>
          <FilterSheet setIsFilterOpen={setIsFilterOpen} />
        </Modal>
      )}
    </>
  );
};

export default Filter;
