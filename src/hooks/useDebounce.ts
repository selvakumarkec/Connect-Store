import { useState, useEffect } from "react";

/**
 * Returns a debounced value that only updates after a delay.
 * @param value The value to debounce
 * @param delay Delay in ms (default 300)
 */
export function useDebounce<T>(value: T, delay: number = 300): T {
  const [debounced, setDebounced] = useState<T>(value);

  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);

  return debounced;
}
