import type { ApiErrorResponse } from "./commonTypes";

export type ApiResponse<T> = Promise<T | ApiErrorResponse>;
