import type { RegisterState, RegisterStore } from "@/types/authTypes";
import { createStore } from "zustand/vanilla";

const initialState: RegisterState = {
  socialId: "",
  position: "",
  techStackIds: new Set(),
  nickname: "",
};

export const createRegisterStore = () => {
  return createStore<RegisterStore>()((set) => ({
    ...initialState,
    setMembershipInfo: ({ target, info }) => {
      return set({ [target]: info });
    },
    resetMembershipInfo: () => set(initialState),
  }));
};
