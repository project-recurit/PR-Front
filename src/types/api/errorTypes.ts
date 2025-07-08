/** API 에러 타입 */
export type ApiError = {
  timestamp: string;
  status: number;
  error: string;
  path: string;
};
