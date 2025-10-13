export function handleError<T extends unknown[], R>(fn: (...args: T) => Promise<R>) {
  return async (...args: T): Promise<R> => {
    try {
      return await fn(...args);
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Error in function "${fn.name}": ${error.message}\nStack:\n${error.stack}`);
      } else {
        console.error(`Error in function "${fn.name}":`, error);
      }
      throw error;
    }
  };
}
