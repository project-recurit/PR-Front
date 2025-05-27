import type { signUpSchema } from "@/schemas/authSchema";
import type { z } from "zod";

export type SignupForm = z.infer<typeof signUpSchema>;
