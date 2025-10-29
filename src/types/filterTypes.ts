import type { PostType } from "./postTypes";
import type { TechStack } from "./techStackTypes";
import type { createCategoryStore } from "@/stores/categoryStore";
import type { createPostSearchStore } from "@/stores/postSearchStore";

export type PostFilter = {
  positions: string[];
  techStacks: TechStack[];
  modes: string[];
  durations: string[];
};

export type FilterChip = {
  type: string | number;
  title: string;
};

export type FilterCategory = {
  key: string;
  title: string;
  chips: FilterChip[];
};

export type CategoryState = {
  selectedMenu: PostType;
  activeFilters: TechStack[];
};

export type CategoryActions = {
  selectMenu: (menu: PostType) => void;
  applyFilter: (selectedFilter: TechStack[]) => void;
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
