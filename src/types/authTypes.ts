import type { signUpSchema } from "@/schema/authSchema";
import type { z } from "zod";

export type SignupForm = z.infer<typeof signUpSchema>;
