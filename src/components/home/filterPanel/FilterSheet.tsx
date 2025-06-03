"use client";

import FilterActionBar from "./FilterActionBar";
import FilterMenu from "./FilterMenu";
import Header from "@/components/layout/Header";
import { useState } from "react";

interface FilterSheetProps {
  closeModal: () => void;
  appliedFilters: Set<string>;
}

const FilterSheet = ({ closeModal, appliedFilters }: FilterSheetProps) => {
  const [selectedFilters, setSelectedFilter] = useState<Set<string>>(appliedFilters);

  return (
    <div className="flex h-screen w-screen flex-col">
      <Header
        heading="필터"
        backButtonEvent={closeModal}
      />
      <FilterMenu
        selectedFilter={selectedFilters}
        setSelectedFilter={setSelectedFilter}
      />
      <FilterActionBar
        closeModal={closeModal}
        appliedFilters={appliedFilters}
        setSelectedFilter={setSelectedFilter}
      />
    </div>
  );
};

export default FilterSheet;
