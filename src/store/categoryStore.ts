import { create } from "zustand";

interface CategoryStore {
  selectedMenu: string;
  selectMenu: (menu: string) => void;
}

const useCategoryStore = create<CategoryStore>((set) => ({
  selectedMenu: "전체",
  selectMenu: (menu: string) => set({ selectedMenu: menu }),
}));

export default useCategoryStore;
