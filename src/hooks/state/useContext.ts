import { TechStacksContext } from "@/contexts/TechStacksContext";
import { useContext } from "react";

export const useTechStacksContext = () => {
  return useContext(TechStacksContext);
};
