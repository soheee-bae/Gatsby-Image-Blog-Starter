import { useState, useEffect } from "react";

export const useScroll = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    if (typeof window !== `undefined`) {
      window.onscroll = () => {
        setScroll(window.pageYOffset);
      };
    }
  }, []);

  const scrollTriggered = scroll > 20;

  return { scrollTriggered, scroll };
};
