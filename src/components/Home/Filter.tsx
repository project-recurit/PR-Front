'use client';

import { FilterSort } from '@/assets/icons';
import Modal from '../Modal';
import FilterSheet from './FilterSheet';
import { FILTER_MENU } from '@/assets/constantData';
import { useState } from 'react';
import { useCategoryStore } from '@/hooks/zustandContext/useCategoryStore';
import FilterChip from '../Common/FilterChip';

const Filter = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { activeFilters, applyFilter } = useCategoryStore((state) => state);

  return (
    <>
      <div className='flex justify-between gap-x-8 px-16 py-16 shadow-[0_3px_5px_0_rgba(0,0,0,0.04)]'>
        {FILTER_MENU.slice(0, 3).map(({ category }) => (
          <button
            key={category}
            className={'caption-s rounded-full px-16 py-8'}
            onClick={() => setIsFilterOpen(true)}
          >
            {category}
          </button>
        ))}
        <button>
          <FilterSort />
        </button>
      </div>
      <div>
        {[...activeFilters].map((filter) => {
          return (
            <FilterChip
              key={filter}
              content={filter}
              active={true}
              onClick={() =>
                applyFilter(
                  new Set([...activeFilters].filter((f) => f !== filter))
                )
              }
            />
          );
        })}
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
