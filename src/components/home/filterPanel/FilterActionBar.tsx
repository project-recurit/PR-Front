import Botton from "@/components-temp/ui/Botton";
import { Dispatch, SetStateAction } from "react";

interface FilterActionBarProps {
  closeModal: () => void;
  appliedFilters: Set<string>;
  setSelectedFilter: Dispatch<SetStateAction<Set<string>>>;
}

const FilterActionBar = ({ closeModal, appliedFilters, setSelectedFilter }: FilterActionBarProps) => {
  return (
    <div className="flex w-full items-center gap-24 px-16 py-8 leading-24 tracking-[0.15px] shadow-[0_-1px_3px_0_#141414]">
      <button
        className="whitespace-nowrap text-14 text-black-600"
        onClick={() => {
          appliedFilters.clear();
          setSelectedFilter(new Set());
          closeModal();
        }}
      >
        선택 초기화
      </button>
      <Botton
        size="large"
        className="h-52 bg-black p-10 text-18 text-white"
        onClick={() => {
          setSelectedFilter(appliedFilters);
          closeModal();
        }}
      >
        적용하기
      </Botton>
    </div>
  );
};

export default FilterActionBar;
