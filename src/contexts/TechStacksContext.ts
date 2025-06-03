import type { TechStack } from "@/types/commonTypes";
import { createContext } from "react";

export const TechStacksContext = createContext<TechStack[]>([]);
