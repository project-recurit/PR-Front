'use client';

import { ChevronLeft } from '@/assets/icons';
import { useCategoryStore } from '@/hooks/zustandContext/useCategoryStore';

import FilterMenu from './FilterMenu';
import { useState } from 'react';

interface FilterSheetProps {
  setIsFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilterSheet = ({ setIsFilterOpen }: FilterSheetProps) => {
  const { activeFilters, applyFilter, resetFilter } = useCategoryStore(
    (state) => state
  );
  const [selectedFilter, setSelectedFilter] =
    useState<Set<string>>(activeFilters);

  return (
    <div className='fixed left-0 top-0 z-50 h-screen w-screen bg-white'>
      <div className='flex'>
        <button onClick={() => setIsFilterOpen(false)}>
          <ChevronLeft />
        </button>
        <h2>필터</h2>
      </div>
      <FilterMenu
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <div>
        <button
          onClick={() => {
            resetFilter();
            setIsFilterOpen(false);
          }}
        >
          선택 초기화
        </button>
        <button
          onClick={() => {
            applyFilter(selectedFilter);
            setIsFilterOpen(false);
          }}
        >
          적용하기
        </button>
      </div>
    </div>
  );
};

export default FilterSheet;
