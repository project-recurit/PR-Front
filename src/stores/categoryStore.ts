import type { CategoryMenu, CategoryState, CategoryStore } from "@/types/filterTypes";
import { createStore } from "zustand/vanilla";

const initialState: CategoryState = {
  selectedMenu: "전체",
  activeFilters: new Set(),
};

export const createCategoryStore = () => {
  return createStore<CategoryStore>()((set, get) => ({
    ...initialState,
    selectMenu: (menu: CategoryMenu) => set({ selectedMenu: menu }),
    applyFilter: (selectedFilter: Set<string>) => set({ activeFilters: selectedFilter }),
    resetFilter: () => {
      const { activeFilters } = get();
      activeFilters.clear();
      set({ activeFilters });
    },
  }));
};
