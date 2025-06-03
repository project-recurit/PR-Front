import type { CategoryState, CategoryStore } from "@/types/filterTypes";
import type { PostType } from "@/types/postTypes";
import { createStore } from "zustand/vanilla";

const initialState: CategoryState = {
  selectedMenu: "PJ",
  activeFilters: [],
};

export const createCategoryStore = () => {
  return createStore<CategoryStore>()((set) => ({
    ...initialState,
    selectMenu: (menu: PostType) => set({ selectedMenu: menu }),
    applyFilter: (selectedFilter) => set({ activeFilters: selectedFilter }),
    resetFilter: () => set({ activeFilters: [] }),
  }));
};
