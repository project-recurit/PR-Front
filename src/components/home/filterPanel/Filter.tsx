"use client";

import FilterSheet from "./FilterSheet";
import { ChevronDown, FilterFunnel } from "@/assets/svgs/icons";
import Modal from "@/components/ui/Modal";
import SelectChip from "@/components/ui/SelectChip";
import { useDisclosure } from "@/hooks/disclosure/useDisclosure";
import { useCategoryStore } from "@/hooks/state/useZustandStore";

const Filter = () => {
  const { isOpen: isModalOpen, open: openModal, close: closeModal } = useDisclosure();
  const { activeFilters, applyFilter } = useCategoryStore((state) => state);

  return (
    <>
      <div className="flex h-48 justify-between px-16 py-8 shadow-[0_3px_5px_0_rgba(0,0,0,0.04)]">
        <div className="flex items-center gap-10 overflow-x-auto">
          {activeFilters.size > 0 &&
            [...activeFilters].map((filter) => {
              return (
                <SelectChip
                  size="s"
                  key={filter.id}
                  content={filter.name}
                  active={true}
                  onClick={() => applyFilter(new Set([...activeFilters].filter((f) => f !== filter)))}
                />
              );
            })}
        </div>
        <button onClick={openModal}>
          <FilterFunnel />
        </button>
      </div>
      <div className="flex justify-end bg-black-100 px-16 py-12">
        <button className="flex items-center gap-4 p-8">
          <span className="caption-12-s">최신순</span>
          <ChevronDown className="h-16 w-16" />
        </button>
      </div>
      <Modal isModalOpen={isModalOpen}>
        <FilterSheet closeModal={closeModal} />
      </Modal>
    </>
  );
};

export default Filter;
