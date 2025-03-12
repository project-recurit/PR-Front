"use client";

import { HomeSearch } from "@/assets/icons";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

const HomeSearchBar = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const searchEvent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query) {
      router.push("/");
      return;
    }
    router.push(`/?search=${query}`);
    inputRef.current?.blur();
  };

  return (
    <form
      className="relative h-72 w-full border-b border-black-200 px-16 py-12"
      onSubmit={(e) => searchEvent(e)}
    >
      <input
        ref={inputRef}
        placeholder="제목, 글 내용을 검색해보세요."
        className="border-pr-gray body-14-r h-full w-full rounded-8 border-1 p-16"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      <HomeSearch className="pointer-events-none absolute right-32 top-1/2 -translate-y-1/2" />
    </form>
  );
};

export default HomeSearchBar;
