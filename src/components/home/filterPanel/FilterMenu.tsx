import { ChevronDown, ChevronUp } from "@/assets/svgs/icons";
import SelectChip from "@/components/ui/SelectChip";
import { createFilterMenus } from "@/constants/filterOptions";
import { useTechStacksContext } from "@/hooks/state/useContext";
import { FilterChip } from "@/types/filterTypes";
import { getTechStackColor } from "@/utils/techStackColor";
import { Dispatch, SetStateAction, useState } from "react";

interface FilterMenuProps {
  selectedFilter: Set<string>;
  setSelectedFilter: Dispatch<SetStateAction<Set<string>>>;
}

const FilterMenu = ({ selectedFilter, setSelectedFilter }: FilterMenuProps) => {
  const allTechStacks = useTechStacksContext();
  const filterMenus = createFilterMenus(allTechStacks);
  const [isShowChips, setIsShowChips] = useState<Record<string, boolean>>(
    Object.fromEntries(filterMenus.map((menu) => [menu.key, true])),
  );

  const toggleChips = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget.name;
    setIsShowChips((prev) => ({
      ...prev,
      [target]: !prev[target],
    }));
  };

  const onClickChip = (category: string, chip: FilterChip) => {
    const uniqueKey = getFilterUniqueKey(category, chip.type);
    setSelectedFilter((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(uniqueKey)) {
        newSet.delete(uniqueKey);
      } else {
        newSet.add(uniqueKey);
      }
      return newSet;
    });
  };

  const getFilterUniqueKey = (category: string, type: string | number) => `${category}_${type}`;

  return (
    <div className="overflow-y-auto">
      {filterMenus.map(({ key: filterCategory, title, chips }) => (
        <div key={`filter_menu_${filterCategory}`}>
          <button
            className="flex w-full justify-between border-y-[0.5px] p-16"
            name={filterCategory}
            onClick={(e) => toggleChips(e)}
          >
            <h3 className="body-16-s">{title}</h3>
            {isShowChips[filterCategory] ? <ChevronUp /> : <ChevronDown className="h-24 w-24" />}
          </button>
          {isShowChips[filterCategory] && (
            <div className="flex w-full flex-wrap gap-10 bg-black-50 px-16 pb-18 pt-12">
              {chips.map((chip) => (
                <SelectChip
                  key={`filter_menu_${filterCategory}_chip_${chip.type}`}
                  size="m"
                  activeColor={filterCategory === "techStack" ? getTechStackColor(chip.type as number) : undefined}
                  active={selectedFilter.has(getFilterUniqueKey(filterCategory, chip.type))}
                  onClick={() => onClickChip(filterCategory, chip)}
                  content={chip.title}
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
