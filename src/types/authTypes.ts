import type { TechStack } from "./techStackTypes";
import type { ApiResponse } from "./utils";
import type { createRegisterStore } from "@/stores/registerStore";
import type { Account, User } from "next-auth";
import type { AdapterUser } from "next-auth/adapters";

export type SocialLogInApiParams = { user: User | AdapterUser; account: Account };

export type SocialLogInResponse = ApiResponse<{
  status: "LOGIN_SUCCESS" | "USER_INFO_UPDATE";
  data: {
    id: string;
    accessToken: string;
    refreshToken: string;
    isSignUpSuccess: boolean;
  };
}>;

type RegisterData = {
  position: string;
  nickname: string;
};

export type RegisterFormData = RegisterData & {
  techStacks: TechStack[];
};

export type RegisterApiParams = RegisterData & {
  socialId: string;
  techStackIds: number[];
};

export type RegisterApiResponse = ApiResponse<{
  status: "USER_INFO_UPDATE";
  data: {
    nickname: string;
    position: string;
    techStacks: string[];
    accessToken: string;
    refreshToken: string;
  };
}>;

export type RegisterState = {
  socialId: string;
  position: string;
  techStackIds: Set<TechStack>;
  nickname: string;
};

export type RegisterActions = {
  setMembershipInfo: <K extends keyof RegisterState>(params: { target: K; info: RegisterState[K] }) => void;
  resetMembershipInfo: () => void;
};

export type RegisterStore = RegisterState & RegisterActions;

export type RegisterStoreApi = ReturnType<typeof createRegisterStore>;
