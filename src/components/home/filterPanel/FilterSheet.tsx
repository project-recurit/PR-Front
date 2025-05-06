"use client";

import FilterActionBar from "./FilterActionBar";
import FilterMenu from "./FilterMenu";
import Header from "@/components/layout/Header";
import { useCategoryStore } from "@/hooks/state/useZustandStore";
import { useState } from "react";

interface FilterSheetProps {
  setIsFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilterSheet = ({ setIsFilterOpen }: FilterSheetProps) => {
  const { activeFilters } = useCategoryStore((state) => state);
  const [selectedFilter, setSelectedFilter] = useState<Set<string>>(activeFilters);

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-white">
      <Header heading="필터" backButtonEvent={()=>setIsFilterOpen(false)} />
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
