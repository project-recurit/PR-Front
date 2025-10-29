import { ChipXClose } from "@/assets/svgs/icons";

interface FilterChipProps {
  size: "m" | "s";
  onClick: () => void;
  active: boolean;
  activeColor?: string;
  content: string;
}

const SelectChip = ({ size, active, onClick, content, activeColor }: FilterChipProps) => {
  const chipSize: Record<string, string> = {
    m: "h-30 rounded-8 border-1 border-black px-16 py-8 gap-8",
    s: "h-18 rounded-xl px-8 py-2 gap-2",
  };

  return (
    <button
      className={`caption-12-r flex flex-row items-center whitespace-nowrap ${chipSize[size]} ${size === "m" && active && "font-bold"}`}
      style={{ backgroundColor: active ? activeColor : "white" }}
      onClick={onClick}
    >
      {content}
      {active && <ChipXClose />}
    </button>
  );
};

export default SelectChip;
