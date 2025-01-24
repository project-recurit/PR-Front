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
    <div className="w-full flex justify-between gap-x-12  px-16  border-b border-light-gray py-12 ">
      <input
        placeholder="제목, 글 내용을 검색해보세요."
        className="w-full border-1  border-pr-gray rounded-lg body-14-r p-16 "
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
        className="min-w-fit border rounded-lg px-12  py-4 "
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
