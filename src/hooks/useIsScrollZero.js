import { useState, useEffect } from "react";

// @Incomplete - understand how to debounce properly
// https://codesandbox.io/s/m4ky8vwq4p

// @Cleanup - bad name
export default function useIsScrollZero() {
  const [scrollY, setScrollY] = useState(window.scrollY === 0);

  useEffect(() => {
    const handleScroll = () => {
      if (true) {
        setScrollY(window.scrollY === 0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollY;
}
