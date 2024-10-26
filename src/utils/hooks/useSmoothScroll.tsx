import { useEffect } from "react";

const useSmoothScroll = () => {
  useEffect(() => {
    let scrollPosition = 0;
    const root = document.documentElement;

    const handleScroll = () => {
      scrollPosition = window.scrollY;
    };

    const smoothScroll = () => {
      root.style.setProperty("--scroll", scrollPosition * 0.08 + "px");
      requestAnimationFrame(smoothScroll);
    };

    window.addEventListener("scroll", handleScroll);
    smoothScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
};

export default useSmoothScroll;

//TO use add css and call the custom hook in App.tsx

// useSmoothScroll();

// html {
//   scroll-behavior: smooth;
// }

// body {
//   transform: translateY(var(--scroll));
//   transition: transform 0.1s ease-out;
//   will-change: transform;
// }
