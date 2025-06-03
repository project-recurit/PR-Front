export type ApiErrorResponse = {
  timestamp: string;
  status: number;
  error: string;
  path: string;
};

export type TechStack = {
  id: number;
  name: string;
  level?: number;
};
