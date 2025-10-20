import Button from "@/components/ui/Button";
import { Dispatch, SetStateAction } from "react";

interface FilterActionBarProps {
  closeModal: () => void;
  appliedFilters: Set<string>;
  setSelectedFilter: Dispatch<SetStateAction<Set<string>>>;
}

const FilterActionBar = ({ closeModal, appliedFilters, setSelectedFilter }: FilterActionBarProps) => {
  return (
    <div className="mt-auto flex w-full items-center gap-24 px-16 py-8 leading-24 tracking-[0.15px] shadow-[0_0_33px_0_rgba(20,20,20,0.2)]">
      <button
        className="whitespace-nowrap text-14 text-black-600"
        onClick={() => {
          appliedFilters.clear();
          setSelectedFilter(new Set());
        }}
      >
        선택 초기화
      </button>
      <Button
        size="large"
        className="h-52 bg-black p-10 text-18 text-white"
        onClick={() => {
          setSelectedFilter(appliedFilters);
          closeModal();
        }}
      >
        적용하기
      </Button>
    </div>
  );
};

export default FilterActionBar;
