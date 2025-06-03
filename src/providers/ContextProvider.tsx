"use client";

import { TechStacksContext } from "@/contexts/TechStacksContext";
import type { TechStack } from "@/types/commonTypes";

interface ContextProviderProps {
  children: Readonly<React.ReactNode>;
  allStacks: Readonly<TechStack[]>;
}

const ContextProvider = ({ children, allStacks }: ContextProviderProps) => {
  return <TechStacksContext.Provider value={allStacks}>{children}</TechStacksContext.Provider>;
};

export default ContextProvider;
