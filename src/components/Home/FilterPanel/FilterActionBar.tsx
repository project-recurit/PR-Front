import Button from "@/components/Common/Button";
import { useCategoryStore } from "@/hooks/State/useCategoryStore";

interface FilterActionBarProps {
  setIsFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedFilter: Set<string>;
}

const FilterActionBar = ({ setIsFilterOpen, selectedFilter }: FilterActionBarProps) => {
  const { applyFilter, resetFilter } = useCategoryStore((state) => state);
  return (
    <div className="flex w-full items-center gap-24 px-16 py-8 leading-24 tracking-[0.15px] shadow-[0_-1px_3px_0_#141414]">
      <button
        className="whitespace-nowrap text-14 text-black-600"
        onClick={() => {
          resetFilter();
          setIsFilterOpen(false);
        }}
      >
        선택 초기화
      </button>
      <Button
        size="m"
        className="h-52 bg-black p-10 text-18 text-white"
        onClick={() => {
          applyFilter(selectedFilter);
          setIsFilterOpen(false);
        }}
      >
        적용하기
      </Button>
    </div>
  );
};

export default FilterActionBar;
