import type { createCategoryStore } from "@/stores/categoryStore";

export type CategoryMenu = "전체" | "PJ" | "PR";

export type CategoryState = {
  selectedMenu: CategoryMenu;
  selectedFilter: string[];
};

export type CategoryActions = {
  selectMenu: (menu: CategoryMenu) => void;
  selectFilter: (filter: string) => void;
  InitializeFilter: () => void;
};

export type CategoryStore = CategoryState & CategoryActions;

export type CategoryStoreApi = ReturnType<typeof createCategoryStore>;
