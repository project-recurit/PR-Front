import SelectChip from "../../Common/SelectChip";
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
    <div className="overflow-y-auto">
      {FILTER_MENU.map(({ category, chips }) => (
        <div key={category}>
          <button
            className="flex w-full justify-between border-y-[0.5px] p-16"
            name={category}
            onClick={(e) => toggleChips(e)}
          >
            <h3 className="body-16-s">{category}</h3>
            {isShowChips[category] ? <ChevronUp /> : <ChevronDown className="h-24 w-24" />}
          </button>
          {isShowChips[category] && (
            <div className="flex w-full flex-wrap gap-10 bg-black-50 px-16 pb-18 pt-12">
              {chips.map((chip) => (
                <SelectChip
                  key={chip}
                  size="m"
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
    </div>
  );
};

export default FilterMenu;
