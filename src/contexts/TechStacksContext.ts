import type { TechStack } from "@/types/techStackTypes";
import { createContext } from "react";

export const TechStacksContext = createContext<TechStack[]>([]);
