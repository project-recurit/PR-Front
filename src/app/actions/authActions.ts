"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { COMMON_HEADERS } from "@/config/httpRequestHeaders";
import { AUTH_API_URL } from "@/constants/apiEndpoints";
import { SignupForm } from "@/types/type";
import { getServerSession } from "next-auth";

export const registerAction = async (data: SignupForm) => {
  try {
    const res = await fetch(AUTH_API_URL.register, {
      method: "POST",
      headers: COMMON_HEADERS,
      body: JSON.stringify(data),
    });

    if (res.ok) {
      const session = await getServerSession(authOptions);
      const { data } = await res.json();
      session.accessToken = data.accessToken;
      return `/`;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};
