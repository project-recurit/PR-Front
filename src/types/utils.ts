import type { ApiErrorResponse } from "./commonTypes";

export type ApiResponse<T> = T | ApiErrorResponse;
