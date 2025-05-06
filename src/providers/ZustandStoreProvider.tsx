"use client";

import { createCategoryStore } from "@/stores/categoryStore";
import { createPostSearchStore } from "@/stores/postSearchStore";
import type { CategoryStoreApi, PostSearchStoreApi } from "@/types/filterTypes";
import { createContext, useRef } from "react";

export const CategoryStoreContext = createContext<CategoryStoreApi | undefined>(undefined);
export const PostSearchStoreContext = createContext<PostSearchStoreApi | undefined>(undefined);

interface ZustandStoreProviderProps {
  children: Readonly<React.ReactNode>;
}

export const ZustandStoreProvider = ({ children }: ZustandStoreProviderProps) => {
  const categoryStoreRef = useRef<CategoryStoreApi>(null);
  const postSearchStoreRef = useRef<PostSearchStoreApi>(null);

  if (!categoryStoreRef.current) {
    categoryStoreRef.current = createCategoryStore();
  }

  if (!postSearchStoreRef.current) {
    postSearchStoreRef.current = createPostSearchStore();
  }

  return (
    <CategoryStoreContext.Provider value={categoryStoreRef.current}>
      <PostSearchStoreContext.Provider value={postSearchStoreRef.current}>{children}</PostSearchStoreContext.Provider>
    </CategoryStoreContext.Provider>
  );
};
