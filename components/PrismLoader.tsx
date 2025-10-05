"use client";

import { useEffect } from "react";

const PRISM_CORE =
  "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js";
const PRISM_CSHARP =
  "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-csharp.min.js";
const PRISM_LINES =
  "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/line-numbers/prism-line-numbers.min.js";

const loadScript = (src: string) =>
  new Promise<void>((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }
    const el = document.createElement("script");
    el.src = src;
    el.defer = true;
    el.onload = () => resolve();
    el.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.head.appendChild(el);
  });

export default function PrismLoader() {
  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        await loadScript(PRISM_CORE);
        await loadScript(PRISM_CSHARP);
        await loadScript(PRISM_LINES);
        if (!cancelled) {
          window.Prism?.highlightAll();
        }
      } catch (err) {
        console.warn("[PrismLoader]", err);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
