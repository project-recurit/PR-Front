import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { SignupForm } from "@/types/type";
import { getServerSession } from "next-auth";

export const userSignUp = async (data: SignupForm) => {
  const BASE_URL = process.env.API_BASE_URL;
  try {
    const res = await fetch(`http://158.180.72.57:8080/api/v1/users/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
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
