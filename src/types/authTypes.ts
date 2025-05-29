import type { TechStack } from "./commonTypes";
import type { ApiResponse } from "./utils";
import type { signUpSchema } from "@/schemas/authSchema";
import type { createRegisterStore } from "@/stores/registerStore";
import type { Account, User } from "next-auth";
import type { AdapterUser } from "next-auth/adapters";
import type { z } from "zod";

export type SignupForm = z.infer<typeof signUpSchema>;

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

export type RegisterData = {
  socialId: number;
  position: string;
  techStackIds: Set<number>;
  nickname: string;
};

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
