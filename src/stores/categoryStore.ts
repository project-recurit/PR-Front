import type { CategoryMenu, CategoryState, CategoryStore } from "@/types/categoryTypes";
import { createStore } from "zustand/vanilla";

const initialState: CategoryState = {
  selectedMenu: "전체",
  selectedFilter: [],
};

export const createCategoryStore = () => {
  return createStore<CategoryStore>()((set) => ({
    ...initialState,
    selectMenu: (menu: CategoryMenu) => set({ selectedMenu: menu }),
    selectFilter: (filter: string) =>
      set(({ selectedFilter }) => ({
        selectedFilter: [...selectedFilter, filter],
      })),
    InitializeFilter: () => set({ selectedFilter: [] }),
  }));
};
