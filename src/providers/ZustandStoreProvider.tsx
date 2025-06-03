"use client";

import { CategoryStoreContext } from "@/contexts/CategoryStoreContext";
import { PostSearchStoreContext } from "@/contexts/PostSearchStoreContext";
import { RegisterStoreContext } from "@/contexts/RegisterStoreContext";
import { createCategoryStore } from "@/stores/categoryStore";
import { createPostSearchStore } from "@/stores/postSearchStore";
import { createRegisterStore } from "@/stores/registerStore";
import type { RegisterStoreApi } from "@/types/authTypes";
import type { CategoryStoreApi, PostSearchStoreApi } from "@/types/filterTypes";
import { useRef } from "react";

interface ZustandStoreProviderProps {
  children: Readonly<React.ReactNode>;
}

export const ZustandStoreProvider = ({ children }: ZustandStoreProviderProps) => {
  const categoryStoreRef = useRef<CategoryStoreApi>(null);
  const postSearchStoreRef = useRef<PostSearchStoreApi>(null);
  const registerStoreRef = useRef<RegisterStoreApi>(null);

  if (!categoryStoreRef.current) {
    categoryStoreRef.current = createCategoryStore();
  }

  if (!postSearchStoreRef.current) {
    postSearchStoreRef.current = createPostSearchStore();
  }

  if (!registerStoreRef.current) {
    registerStoreRef.current = createRegisterStore();
  }

  return (
    <CategoryStoreContext.Provider value={categoryStoreRef.current}>
      <PostSearchStoreContext.Provider value={postSearchStoreRef.current}>
        <RegisterStoreContext.Provider value={registerStoreRef.current}>{children}</RegisterStoreContext.Provider>
      </PostSearchStoreContext.Provider>
    </CategoryStoreContext.Provider>
  );
};
