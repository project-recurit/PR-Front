import FilterChip from "../Common/FilterChip";
import { FILTER_MENU } from "@/assets/constantData";
import { ChevronDown, ChevronUp } from "@/assets/icons";
import { useState } from "react";

interface FilterMenuProps {
  selectedFilter: Set<string>;
  setSelectedFilter: React.Dispatch<React.SetStateAction<Set<string>>>;
}

const FilterMenu = ({ selectedFilter, setSelectedFilter }: FilterMenuProps) => {
  const [isShowChips, setIsShowChips] = useState<Record<string, boolean>>({
    포지션: true,
    "기술 스택": true,
    진행방식: true,
    진행기간: true,
  });

  const toggleChips = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget.name;
    setIsShowChips((prev) => ({
      ...prev,
      [target]: !prev[target],
    }));
  };

  return (
    <>
      {FILTER_MENU.map(({ category, chips }) => (
        <div key={category}>
          <button
            className="flex w-full justify-between"
            name={category}
            onClick={(e) => toggleChips(e)}
          >
            <h3>{category}</h3>
            {isShowChips[category] ? <ChevronUp /> : <ChevronDown />}
          </button>
          {isShowChips[category] && (
            <div>
              {chips.map((chip) => (
                <FilterChip
                  key={chip}
                  large
                  active={selectedFilter.has(chip)}
                  onClick={() => {
                    setSelectedFilter((prev) => {
                      const newSet = new Set(prev);
                      if (newSet.has(chip)) {
                        newSet.delete(chip);
                      } else {
                        newSet.add(chip);
                      }
                      return newSet;
                    });
                  }}
                  content={chip}
                />
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default FilterMenu;
