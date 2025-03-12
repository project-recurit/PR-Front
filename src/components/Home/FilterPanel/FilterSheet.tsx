"use client";

import FilterActionBar from "./FilterActionBar";
import FilterHeader from "./FilterHeader";
import FilterMenu from "./FilterMenu";
import { useCategoryStore } from "@/hooks/State/useCategoryStore";
import { useState } from "react";

interface FilterSheetProps {
  setIsFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilterSheet = ({ setIsFilterOpen }: FilterSheetProps) => {
  const { activeFilters } = useCategoryStore((state) => state);
  const [selectedFilter, setSelectedFilter] = useState<Set<string>>(activeFilters);

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-white">
      <FilterHeader setIsFilterOpen={setIsFilterOpen} />
      <FilterMenu
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <FilterActionBar
        setIsFilterOpen={setIsFilterOpen}
        selectedFilter={selectedFilter}
      />
    </div>
  );
};

export default FilterSheet;
