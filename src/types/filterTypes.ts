import type { createCategoryStore } from "@/stores/categoryStore";

export type MainCategory = "PJ" | "PR";

export type CategoryState = {
  selectedMenu: MainCategory;
  activeFilters: Set<string>;
};

export type CategoryActions = {
  selectMenu: (menu: MainCategory) => void;
  applyFilter: (selectedFilter: Set<string>) => void;
  resetFilter: () => void;
};

export type CategoryStore = CategoryState & CategoryActions;

export type CategoryStoreApi = ReturnType<typeof createCategoryStore>;
