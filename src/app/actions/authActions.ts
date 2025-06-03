"use server";

import { registerApi } from "@/apis/authApis";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import type { RegisterApiResponse, RegisterFormData } from "@/types/authTypes";
import { getServerSession } from "next-auth";

export const registerAction = async (registerFormData: RegisterFormData): Promise<RegisterApiResponse | void> => {
  const session = await getServerSession(authOptions);
  if (!session) {
    return;
  }

  return await registerApi({
    ...registerFormData,
    techStackIds: registerFormData.techStacks.map((techStack) => techStack.id),
    socialId: session.socialId,
  });
};
