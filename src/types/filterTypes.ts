import type { createCategoryStore } from '@/stores/categoryStore';

export type CategoryMenu = '전체' | 'PJ' | 'PR';

export type CategoryState = {
  selectedMenu: CategoryMenu;
  activeFilters: Set<string>;
};

export type CategoryActions = {
  selectMenu: (menu: CategoryMenu) => void;
  applyFilter: (selectedFilter: Set<string>) => void;
  resetFilter: () => void;
};

export type CategoryStore = CategoryState & CategoryActions;

export type CategoryStoreApi = ReturnType<typeof createCategoryStore>;
