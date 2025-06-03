import { CategoryStoreContext, PostSearchStoreContext, RegisterStoreContext } from "@/providers/ZustandStoreProvider";
import type { RegisterStore } from "@/types/authTypes";
import type { CategoryStore, PostSearchStore } from "@/types/filterTypes";
import { useContext } from "react";
import { useStore } from "zustand";

export const useCategoryStore = <T>(selector: (store: CategoryStore) => T): T => {
  const categoryStoreContext = useContext(CategoryStoreContext);

  if (!categoryStoreContext) {
    throw new Error("카테고리 정보를 가져오지 못했습니다.");
  }

  return useStore(categoryStoreContext, selector);
};

export const usePostSearchStore = <T>(selector: (store: PostSearchStore) => T): T => {
  const postSearchStoreContext = useContext(PostSearchStoreContext);

  if (!postSearchStoreContext) {
    throw new Error("검색어를 가져오지 못했습니다.");
  }

  return useStore(postSearchStoreContext, selector);
};

export const useRegisterStore = <T>(selector: (store: RegisterStore) => T): T => {
  const registerStoreContext = useContext(RegisterStoreContext);

  if (!registerStoreContext) {
    throw new Error("회원 정보를 가져오지 못했습니다.");
  }

  return useStore(registerStoreContext, selector);
};
