import { Search } from "@/assets/svgs/icons";

const SearchBar = ({
  label,
  placeholder,
  value,
  onChange,
  children,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
}) => {
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault(); // 엔터 키 눌러도 폼 제출 안 되게 함
    }
  };
  return (
    <div className="w-full relative">
      {label && <p className="mb-12 body-16-b">{label}</p>}
      <div
        className={`body-16-r } group relative flex h-fit w-full flex-row items-center justify-between rounded-8 border-1 border-black-400 px-16`}
      >
        <input
          value={value || ""}
          onChange={onChange}
          className="w-full py-14 focus:outline-none"
          placeholder={placeholder}
          onKeyDown={handleKeyDown}
        />
        <Search className="min-w-fit text-black-400 group-focus-within:text-black-1000" />
      </div>
      {children}
    </div>
  );
};

export default SearchBar;
