"use client";

import { Search } from "@/assets/svgs/icons";
import { useTechStacksContext } from "@/hooks/state/useContext";
import type { TechStack } from "@/types/techStackTypes";
import { useCallback, useMemo, useRef, useState } from "react";

interface TechStackSearchBarProps {
  addTechStack: (techStack: TechStack) => void;
}

const TechStackSearchBar = ({ addTechStack }: TechStackSearchBarProps) => {
  const allTechStacks = useTechStacksContext();
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const suggestions = useMemo(() => {
    return allTechStacks.filter((techStack) => techStack.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [allTechStacks, searchTerm]);

  const focusInput = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div
      className={`${!!searchTerm ? "rounded-tl-8 rounded-tr-8 border-x border-t" : "rounded-8 border"} relative box-border w-full border-black-400`}
    >
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

      {!!searchTerm && (
        <ol className="absolute left-1 top-full z-10 -ml-2 box-border flex max-h-[312px] w-[calc(100%+2px)] flex-col overflow-y-auto rounded-bl-8 rounded-br-8 border-x border-b border-black-400 bg-white">
          {suggestions.length > 0 ? (
            suggestions.map((suggestion) => (
              <li
                className="px-16 py-14"
                key={suggestion.id}
                onClick={() => {
                  addTechStack(suggestion);
                  setSearchTerm("");
                  focusInput();
                }}
              >
                {suggestion.name}
              </li>
            ))
          ) : (
            <li className="px-16 py-14">결과가 없습니다.</li>
          )}
        </ol>
      )}
    </div>
  );
};

export default TechStackSearchBar;
