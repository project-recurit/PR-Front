export const COMMON_HEADERS = {
  "Content-Type": "application/json",
} as const;

export const AUTHORIZATION_HEADERS = (token: string) =>
  ({
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  }) as const;
