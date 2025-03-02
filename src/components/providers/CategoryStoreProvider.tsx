"use client";

import { createCategoryStore } from "@/stores/categoryStore";
import type { CategoryStoreApi } from "@/types/filterTypes";
import { createContext, useRef } from "react";

export const CategoryStoreContext = createContext<CategoryStoreApi | undefined>(undefined);

interface CategoryStoreProviderProps {
  children: React.ReactNode;
}

export const CategoryStoreProvider = ({ children }: CategoryStoreProviderProps) => {
  const storeRef = useRef<CategoryStoreApi>(null);

  if (!storeRef.current) {
    storeRef.current = createCategoryStore();
  }

  return <CategoryStoreContext.Provider value={storeRef.current}>{children}</CategoryStoreContext.Provider>;
};
