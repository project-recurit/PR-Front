import type { CategoryStoreApi } from "@/types/filterTypes";
import { createContext } from "react";

export const CategoryStoreContext = createContext<CategoryStoreApi | undefined>(undefined);
