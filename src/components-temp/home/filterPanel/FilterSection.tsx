"use client";

import FilterSheet from "./FilterSheet";
import { FilterFunnel } from "@/assets/svgs/icons";
import Modal from "@/components-temp/ui/Modal";
import SelectChip from "@/components-temp/ui/SelectChip";
import { useDisclosure } from "@/hooks/disclosure/useDisclosure";

interface FilterSectionProps {
  appliedFilters: Set<string>;
}

const FilterSection = ({ appliedFilters }: FilterSectionProps) => {
  const { isOpen: isModalOpen, open: openModal, close: closeModal } = useDisclosure();

  return (
    <>
      <div className="flex h-48 justify-between px-16 py-8 shadow-[0_3px_5px_0_rgba(0,0,0,0.04)]">
        <div className="flex items-center gap-10 overflow-x-auto">
          {appliedFilters.size > 0 &&
            Array.from(appliedFilters).map((option) => {
              return (
                <SelectChip
                  size="s"
                  key={option}
                  content={option}
                  active={true}
                  onClick={() => appliedFilters.delete(option)}
                />
              );
            })}
        </div>
        <button onClick={openModal}>
          <FilterFunnel />
        </button>
      </div>
      <Modal isModalOpen={isModalOpen}>
        <FilterSheet
          closeModal={closeModal}
          appliedFilters={appliedFilters}
        />
      </Modal>
    </>
  );
};

export default FilterSection;
