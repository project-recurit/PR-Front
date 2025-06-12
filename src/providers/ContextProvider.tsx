"use client";

import { TechStacksContext } from "@/contexts/TechStacksContext";
import type { TechStack } from "@/types/techStackTypes";
import type { ReactNode } from "react";

interface ContextProviderProps {
  children: Readonly<ReactNode>;
  allStacks: TechStack[];
}

const ContextProvider = ({ children, allStacks }: ContextProviderProps) => {
  return <TechStacksContext.Provider value={allStacks}>{children}</TechStacksContext.Provider>;
};

export default ContextProvider;
