import type { RegisterStoreApi } from "@/types/authTypes";
import { createContext } from "react";

export const RegisterStoreContext = createContext<RegisterStoreApi | undefined>(undefined);
