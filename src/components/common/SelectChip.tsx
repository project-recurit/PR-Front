import { ChipXClose } from "@/assets/icons";

interface FilterChipProps {
  size: "m" | "s";
  onClick: () => void;
  active: boolean;
  content: string;
}

const SelectChip = ({ size, active, onClick, content }: FilterChipProps) => {
  const chipSize: Record<string, string> = {
    m: "h-30 rounded-8 border-1 border-black px-16 py-8 gap-8",
    s: "h-18 rounded-12 px-8 py-2 gap-2",
  };

  return (
    <button
      className={`caption-r flex flex-row items-center whitespace-nowrap ${chipSize[size]} ${size === "m" && active && "font-bold"}`}
      onClick={onClick}
    >
      {content}
      {active && <ChipXClose />}
    </button>
  );
};

export default SelectChip;
