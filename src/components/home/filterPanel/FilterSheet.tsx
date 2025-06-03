"use client";

import FilterActionBar from "./FilterActionBar";
import FilterMenu from "./FilterMenu";
import Header from "@/components/layout/Header";
import { useCategoryStore } from "@/hooks/state/useZustandStore";
import type { TechStack } from "@/types/commonTypes";
import { useState } from "react";

interface FilterSheetProps {
  closeModal: () => void;
}

const FilterSheet = ({ closeModal }: FilterSheetProps) => {
  const { activeFilters } = useCategoryStore((state) => state);
  const [selectedFilter, setSelectedFilter] = useState<TechStack[]>(activeFilters);

  return (
    <div className="flex h-screen w-screen flex-col">
      <Header
        heading="필터"
        backButtonEvent={closeModal}
      />
      <FilterMenu
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <FilterActionBar
        closeModal={closeModal}
        selectedFilter={selectedFilter}
      />
    </div>
  );
};

export default FilterSheet;
