import { create } from "zustand";

interface CategoryStore {
  selectedMenu: string;
  selectMenu: (menu: string) => void;
  selectedFilter: string;
  selectFilter: (filter: string) => void;
}

const useCategoryStore = create<CategoryStore>((set) => ({
  selectedMenu: "전체",
  selectMenu: (menu: string) => set({ selectedMenu: menu }),
  selectedFilter: "",
  selectFilter: (filter: string) => set({ selectedFilter: filter }),
}));

export default useCategoryStore;
