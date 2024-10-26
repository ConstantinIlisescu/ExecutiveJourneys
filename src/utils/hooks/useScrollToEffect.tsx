import { scrollToHash, scrollToStartPage } from "@/lib/scrolltoHelpers";
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToEffect = () => {
  const location = useLocation();
  const { hash, pathname } = location;

  useLayoutEffect(() => {
    if (hash) {
      scrollToHash(hash.replace("#", ""));
    } else {
      scrollToStartPage();
    }
  }, [hash, pathname]);
};

export default useScrollToEffect;
