import React, { useEffect, useRef, useState, ReactNode } from "react";

interface AnimatedDivProps {
  children: ReactNode; // Type for children prop
  animationName: string;
}

const AnimatedDiv: React.FC<AnimatedDivProps> = ({
  children,
  animationName,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false); // Type for visibility state
  const ref = useRef<HTMLDivElement | null>(null); // Reference for the div

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Check if the element is at least 20% visible
      if (entry.isIntersecting) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });

    if (ref.current) {
      observer.observe(ref.current); // Start observing the referenced div
    }
  }, []);

  return (
    <div ref={ref} className={` ${isVisible ? animationName : ""} `}>
      {children} {/* Render the children passed to the component */}
    </div>
  );
};

export default AnimatedDiv;
