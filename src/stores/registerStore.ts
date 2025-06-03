import type { RegisterState, RegisterStore } from "@/types/authTypes";
import { createStore } from "zustand/vanilla";

const initialState: RegisterState = {
  socialId: "",
  position: "",
  techStackIds: new Set(),
  nickname: "",
};

export const createRegisterStore = () => {
  return createStore<RegisterStore>()((set, get) => ({
    ...initialState,
    setMembershipInfo: ({ target, info }) => {
      const currentState = get();
      return set({ ...currentState, [target]: info });
    },
    resetMembershipInfo: () => set(initialState),
  }));
};
