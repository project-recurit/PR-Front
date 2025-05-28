import { COMMON_HEADERS } from "@/config/httpRequestHeaders";
import { AUTH_API_URL } from "@/constants/apiEndpoints";
import type { SocialLogInApiParams, SocialLogInResponse } from "@/types/authTypes";
import { handleError } from "@/utils/handleError";

/** 소셜로그인 api */
export const socialLogInApi = handleError(async ({ user, account }: SocialLogInApiParams): SocialLogInResponse => {
  const res = await fetch(AUTH_API_URL.logIn, {
    method: "POST",
    headers: COMMON_HEADERS,
    body: JSON.stringify({
      email: user.email,
      provider: account.provider,
      socialId: account.providerAccountId,
      nickname: user.name || user.email?.split("@")[0] || "Unknown",
    }),
  });
  return await res.json();
});
