import { useEffect, useState, MutableRefObject } from "react";

// Define the type for the ref parameter
export function useIsVisible(
  ref: MutableRefObject<HTMLDivElement | null | undefined>
): boolean {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    // Ensure the ref is not null before observing
    if (ref.current) {
      const observer = new IntersectionObserver(([entry]) => {
        setIntersecting(entry.isIntersecting);
      });

      observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }
  }, [ref]);

  return isIntersecting;
}
