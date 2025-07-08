"use server";

import { registerApi } from "@/apis/authApis";
import { auth } from "@/auth";
import type { RegisterApiResponse, RegisterFormData } from "@/types/authTypes";

export const registerAction = async ({
  position,
  techStacks,
  nickname,
}: RegisterFormData): Promise<RegisterApiResponse> => {
  const session = await auth();
  if (!session?.user) {
    throw new Error("유저 정보를 불러오지 못 했습니다.");
  }

  return await registerApi({
    socialId: session.user.socialId,
    position,
    techStackIds: techStacks.map((techStack) => techStack.id),
    nickname,
  });
};
