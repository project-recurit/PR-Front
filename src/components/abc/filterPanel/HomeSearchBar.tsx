"use client";

import { HomeSearch } from "@/assets/icons";
import { usePostSearchStore } from "@/hooks/state/useZustandStore";
import { useRef, useState } from "react";

const HomeSearchBar = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const { applySearchQuery,searchQuery } = usePostSearchStore((state) => state);
  console.log(' searchQuery => ', searchQuery);

  const inputRef = useRef<HTMLInputElement>(null);

  const searchEvent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchInput.trim()) {
      return;
    }
    applySearchQuery(searchInput.trim());
    inputRef.current?.blur();
  };

  return (
    <form
      className="relative h-72 w-full border-b border-black-200 px-16 py-12"
      onSubmit={searchEvent}
    >
      <input
        ref={inputRef}
        placeholder="제목, 글 내용을 검색해보세요."
        className="border-pr-gray body-14-r h-full w-full rounded-8 border-1 p-16"
        onChange={(e) => setSearchInput(e.target.value)}
        value={searchInput}
      />
      <HomeSearch className="pointer-events-none absolute right-32 top-1/2 -translate-y-1/2" />
    </form>
  );
};

export default HomeSearchBar;
