"use server";

import { TECH_STACK_API_URL } from "@/constants/apiEndpoints";

export const fetchTechStacks = async () => {
  try {
    const res = await fetch(TECH_STACK_API_URL, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error(error);
    return;
  }
};
