import { useState, useEffect } from "react";

export default function useDelay<T>(value: T, delay: number): T | undefined {
  const [delayedValue, setDelayedValue] = useState<T | undefined>(undefined);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayedValue(value);
    }, delay);

    // Cleanup: clear timeout if value or delay changes
    return () => clearTimeout(timer);
  }, [value, delay]);

  return delayedValue;
}
