import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  gsap.defaults({ ease: "power3.out", duration: 0.9 });
}

/** Offset below the fixed header used when scrolling to an in-page anchor. */
export const ANCHOR_OFFSET = 96;

/**
 * Smoothly scroll to an element (or a pixel position). Uses ScrollSmoother when
 * it is active and falls back to native scrolling otherwise.
 */
export const scrollToTarget = (
  target: Element | number,
  smooth = true,
  offset = ANCHOR_OFFSET,
) => {
  const smoother = ScrollSmoother.get();

  if (smoother) {
    const y =
      typeof target === "number"
        ? target
        : Math.max(0, smoother.offset(target, "top top") - offset);
    smoother.scrollTo(y, smooth);
    return;
  }

  const y =
    typeof target === "number"
      ? target
      : target.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: Math.max(0, y), behavior: smooth ? "smooth" : "auto" });
};

export { gsap, ScrollTrigger, ScrollSmoother };
