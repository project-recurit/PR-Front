import type { createCategoryStore } from "@/stores/categoryStore";
import type { createPostSearchStore } from "@/stores/postSearchStore";

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

export type PostSearchState = {
  searchQuery: string;
};

export type PostSearchActions = {
  applySearchQuery: (searchKeyword: string) => void;
  clearSearchQuery: () => void;
};

export type PostSearchStore = PostSearchState & PostSearchActions;

export type PostSearchStoreApi = ReturnType<typeof createPostSearchStore>;
