type ApiErrorResponse = {
  timestamp: string;
  status: number;
  error: string;
  path: string;
};

export type ApiResponse<T> = Promise<T | ApiErrorResponse>;
