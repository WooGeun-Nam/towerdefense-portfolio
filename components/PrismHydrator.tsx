"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const PrismHydrator = () => {
  const pathname = usePathname();

  useEffect(() => {
    let active = true;

    const runHighlight = () => {
      if (!active) return;
      if (typeof window !== "undefined" && window.Prism) {
        window.Prism.highlightAll();
      } else {
        // Prism이 아직 로드되지 않았다면 잠시 후 다시 시도
        setTimeout(runHighlight, 100);
      }
    };

    runHighlight();

    return () => {
      active = false;
    };
  }, [pathname]);

  return null;
};

export default PrismHydrator;
