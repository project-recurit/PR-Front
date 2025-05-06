"use server";

import { sql } from "@/lib/db";

export const checkUser = async (email: string) => {
  const result = await sql`
        SELECT COUNT(*)
        FROM users
        WHERE email = ${email}`;

  return result[0].count > 0;
};
