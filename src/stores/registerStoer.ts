import type { PostSearchState, PostSearchStore } from "@/types/filterTypes";
import { createStore } from "zustand/vanilla";

const initialState: PostSearchState = {
  searchQuery: "",
};

export const createPostSearchStore = () => {
  return createStore<PostSearchStore>()((set) => ({
    ...initialState,
    applySearchQuery: (searchQuery: string) => set({ searchQuery }),
    clearSearchQuery: () => set({ searchQuery: "" }),
  }));
};
