import { ChevronLeft } from "@/assets/icons";

interface FilterHeaderProps {
  setIsFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilterHeader = ({ setIsFilterOpen }: FilterHeaderProps) => {
  return (
    <header className="title-20-s flex h-48 w-full items-center border-b px-9 py-16">
      <button onClick={() => setIsFilterOpen(false)}>
        <ChevronLeft />
      </button>
      <h2>필터</h2>
    </header>
  );
};

export default FilterHeader;
