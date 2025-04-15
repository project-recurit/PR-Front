export const handleError =
  <T extends unknown[], R>(fn: (...args: T) => Promise<R>) =>
  async (...args: T): Promise<R | void> => {
    try {
      return await fn(...args);
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : String(error));
    }
  };
