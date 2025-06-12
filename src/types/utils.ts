import type { ApiErrorResponse } from "./apiTypes";

export type ValueOf<T> = T[keyof T];

export type ApiResponse<T> = T | ApiErrorResponse;
