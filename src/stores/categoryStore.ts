import type { MainCategory, CategoryState, CategoryStore } from "@/types/filterTypes";
import { createStore } from "zustand/vanilla";

const initialState: CategoryState = {
  selectedMenu: "PJ",
  activeFilters: new Set(),
};

export const createCategoryStore = () => {
  return createStore<CategoryStore>()((set, get) => ({
    ...initialState,
    selectMenu: (menu: MainCategory) => set({ selectedMenu: menu }),
    applyFilter: (selectedFilter: Set<string>) => set({ activeFilters: selectedFilter }),
    resetFilter: () => {
      const { activeFilters } = get();
      activeFilters.clear();
      set({ activeFilters });
    },
  }));
};
