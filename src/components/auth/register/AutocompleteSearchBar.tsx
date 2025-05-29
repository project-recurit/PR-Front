import { Search } from "@/assets/svgs/icons";
import type { TechStack } from "@/types/commonTypes";
import { useMemo, useRef, useState } from "react";

interface TechStackSearchBarProps {
  allTechStacks: TechStack[];
  selectTechStackId: (stackId: number) => void;
}

const TechStackSearchBar = ({ allTechStacks, selectTechStackId }: TechStackSearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredSuggestions = useMemo(() => {
    return allTechStacks.filter((suggestion) => suggestion.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [allTechStacks, searchTerm]);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="w-full rounded-8 border-1 border-black-400">
      <form
        className="body-16-r group flex w-full flex-row items-center p-16"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={inputRef}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full focus:outline-none"
          placeholder="스킬을 검색해보세요."
        />
        <Search
          onClick={focusInput}
          className="min-w-fit text-black-400 group-focus-within:text-black-1000"
        />
      </form>
      {searchTerm &&
        (filteredSuggestions.length > 0 ? (
          <ol className="overflow-y-scroll max-h-[312px] w-full flex flex-col">
            {filteredSuggestions.map((suggestion) => (
              <li
                className="py-14 px-16"
                key={suggestion.id}
                onClick={() => selectTechStackId(suggestion.id)}
              >
                {suggestion.name}
              </li>
            ))}
          </ol>
        ) : (
          <li className="w-full p-14">결과가 없습니다.</li>
        ))}
    </div>
  );
};

export default TechStackSearchBar;
