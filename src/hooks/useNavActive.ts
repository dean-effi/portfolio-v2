import { useEffect, useState } from "react";

export default function useNavActive() {
  const [navActive, setNavActive] = useState(false);
  useEffect(() => {
    function onScroll() {
      const scrolled = window.scrollY;
      setNavActive(prev => {
        if (scrolled < 20 && prev) return false;
        if (scrolled > 20 && !prev) return true;
        return prev;
      });
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return navActive;
}
