"use client";

import { createCategoryStore } from "@/stores/categoryStore";
import type { CategoryStoreApi } from "@/types/categoryTypes";
import { createContext, useRef } from "react";

export const CategoryStoreContext = createContext<CategoryStoreApi | undefined>(undefined);

type Props = {
  children: React.ReactNode;
};

export const CategoryStoreProvider = ({ children }: Props) => {
  const storeRef = useRef<CategoryStoreApi>(null);

  if (!storeRef.current) {
    storeRef.current = createCategoryStore();
  }

  return <CategoryStoreContext.Provider value={storeRef.current}>{children}</CategoryStoreContext.Provider>;
};
