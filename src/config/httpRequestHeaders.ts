export const COMMON_HEADERS = {
  "Content-Type": "application/json",
} as const;

export const AUTHORIZATION_HEADERS = (accessToken: string) =>
  ({
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  }) as const;
