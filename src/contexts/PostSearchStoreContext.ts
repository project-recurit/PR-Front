import type { PostSearchStoreApi } from "@/types/filterTypes";
import { createContext } from "react";

export const PostSearchStoreContext = createContext<PostSearchStoreApi | undefined>(undefined);
