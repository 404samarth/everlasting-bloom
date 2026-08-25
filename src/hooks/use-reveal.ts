import { useEffect, useRef } from "react";

/**
 * Observes all `.reveal` descendants of the returned ref's element and
 * adds `.is-visible` when they enter the viewport. Attach only when the
 * content is actually shown (e.g. after the opening sequence).
 */
export function useReveal<T extends HTMLElement>(enabled = true) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    el.querySelectorAll(".reveal").forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, [enabled]);

  return ref;
}
