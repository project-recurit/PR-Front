"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { commonHeaders } from "@/config/commonHeaders";
import { AUTH_API_URL } from "@/constants/apiEndpoints";
import { SignupForm } from "@/types/type";
import { getServerSession } from "next-auth";

export const userSignUp = async (data: SignupForm) => {
  try {
    const res = await fetch(AUTH_API_URL.signUp, {
      method: "POST",
      headers: commonHeaders,
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
