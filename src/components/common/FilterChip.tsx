import { ChipXClose } from '@/assets/icons';

interface FilterChipProps {
  large?: boolean;
  onClick: () => void;
  active: boolean;
  content: string;
}

const FilterChip = ({ large, active, onClick, content }: FilterChipProps) => {
  return (
    <button
      className={`text-[12px] leading-none ${
        large
          ? 'h-30 rounded-8 px-16 py-8 border-1 border-black'
          : 'h-18 rounded-12 px-8 py-2'
      }`}
      onClick={onClick}
    >
      {content}
      {active && <ChipXClose />}
    </button>
  );
};

export default FilterChip;
