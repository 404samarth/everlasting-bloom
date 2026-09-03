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

    const observeAll = (root: ParentNode) => {
      if (root instanceof HTMLElement && root.classList.contains("reveal")) {
        io.observe(root);
      }
      root.querySelectorAll(".reveal").forEach((t) => io.observe(t));
    };

    observeAll(el);

    // Content added later (async data, new blessings, uploaded photos) must
    // also get revealed — otherwise it stays invisible forever.
    const mo = new MutationObserver((records) => {
      for (const r of records) {
        r.addedNodes.forEach((n) => {
          if (n.nodeType === 1) observeAll(n as HTMLElement);
        });
      }
    });
    mo.observe(el, { childList: true, subtree: true });

    return () => {
      mo.disconnect();
      io.disconnect();
    };
  }, [enabled]);

  return ref;
}
