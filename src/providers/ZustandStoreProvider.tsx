"use client";

import { createCategoryStore } from "@/stores/categoryStore";
import type { CategoryStoreApi } from "@/types/filterTypes";
import { createContext, useRef } from "react";

export const CategoryStoreContext = createContext<CategoryStoreApi | undefined>(undefined);

interface CategoryStoreProviderProps {
  children: Readonly<React.ReactNode>;
}

export const CategoryStoreProvider = ({ children }: CategoryStoreProviderProps) => {
  const CategoryStoreRef = useRef<CategoryStoreApi>(null);

  if (!CategoryStoreRef.current) {
    CategoryStoreRef.current = createCategoryStore();
  }

  return <CategoryStoreContext.Provider value={CategoryStoreRef.current}>{children}</CategoryStoreContext.Provider>;
};
