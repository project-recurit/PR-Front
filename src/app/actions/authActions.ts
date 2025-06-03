"use server";

import { registerApi } from "@/apis/authApis";
import { auth } from "@/auth";
import type { RegisterApiResponse, RegisterFormData } from "@/types/authTypes";

export const registerAction = async (registerFormData: RegisterFormData): Promise<RegisterApiResponse | void> => {
  const session = await auth();
  if (!session || !session.user) {
    return;
  }

  return await registerApi({
    ...registerFormData,
    techStackIds: registerFormData.techStacks.map((techStack) => techStack.id),
    socialId: session.user.socialId,
  });
};
