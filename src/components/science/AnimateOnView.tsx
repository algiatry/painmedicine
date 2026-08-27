"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Arms figure choreography (see globals.css "Figure choreography") when the
 * figure scrolls into view, once. The server-rendered state is the finished
 * figure; `data-animate` is only added client-side, so without JS — or with
 * prefers-reduced-motion — readers simply see the complete diagram.
 */
export default function AnimateOnView({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    el.setAttribute("data-animate", "");
    void el.offsetWidth; // commit the armed (pre-animation) state first

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          el.setAttribute("data-inview", "");
          io.disconnect();
        }
      },
      { threshold: 0.35, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return <div ref={ref}>{children}</div>;
}
