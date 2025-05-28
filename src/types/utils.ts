import type { ApiErrorResponse } from "./commonTypes";

export type ValueOf<T> = T[keyof T];

export type ApiResponse<T> = Promise<T | ApiErrorResponse>;
