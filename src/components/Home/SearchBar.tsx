"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const searchEvent = () => {
    if (!query) {
      router.push("/");
      return;
    }
    router.push(`/?search=${query}`);
  };

  return (
    <div className="flex w-full justify-between gap-x-12 border-b border-black-200 px-16 py-12">
      <input
        placeholder="제목, 글 내용을 검색해보세요."
        className="border-pr-gray body-14-r w-full rounded-lg border-1 p-16"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            searchEvent();
            e.currentTarget.blur();
            return;
          }
        }}
      />
      <button
        className="min-w-fit rounded-lg border px-12 py-4"
        onClick={() => {
          searchEvent();
        }}
      >
        검색
      </button>
    </div>
  );
};

export default SearchBar;
