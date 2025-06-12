export function handleError<T extends unknown[], R>(fn: (...args: T) => Promise<R>) {
  return async (...args: T): Promise<R> => {
    try {
      return await fn(...args);
    } catch (error) {
      console.error(error);
      throw new Error(error instanceof Error ? error.message : String(error));
    }
  };
}
