"use client";

import { FILTER_MENU } from "@/assets/constantData";
import { ChevronLeft } from "@/assets/icons";
import { useCategoryStore } from "@/hooks/zustandContext/useCategoryStore";

type Props = {
  setIsFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const FilterSheet = ({ setIsFilterOpen }: Props) => {
  const { selectFilter, InitializeFilter } = useCategoryStore((state) => state);
  const tempSelectedFilter = [];

  return (
    <div className="fixed left-0 top-0 z-50 h-screen w-screen bg-white">
      <div className="flex">
        <button onClick={() => setIsFilterOpen(false)}>
          <ChevronLeft />
        </button>
        <h2>필터</h2>
      </div>
      {FILTER_MENU.map(({ category, chips }) => (
        <div key={category}>
          <h3>{category}</h3>
          <div>
            {chips.map((chip) => (
              <button key={chip}>{chip}</button>
            ))}
          </div>
        </div>
      ))}
      <div>
        <button
          onClick={() => {
            InitializeFilter();
            setIsFilterOpen(false);
          }}
        >
          선택 초기화
        </button>
        <button onClick={() => setIsFilterOpen(false)}>적용하기</button>
      </div>
    </div>
  );
};

export default FilterSheet;
