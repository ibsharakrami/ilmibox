"use client";
import { useEffect, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { gsap, ScrollTrigger, ScrollSmoother, scrollToTarget } from "./gsap";

const normalisePath = (path: string) =>
  path.replace(/\/+$/, "") || "/";

/**
 * Wraps the page in GSAP ScrollSmoother for buttery scrolling and routes
 * same-page anchor links (e.g. "/#features") through it so they glide to the
 * section instead of jumping. Fixed elements (header, scroll-to-top button)
 * must live OUTSIDE this wrapper.
 */
export default function SmoothScroll({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  // Create the smoother once, respecting the user's reduced-motion setting.
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.2,
        effects: true,
        smoothTouch: false, // keep native momentum scrolling on phones
        normalizeScroll: false,
      });

      return () => smoother.kill();
    });

    return () => mm.revert();
  }, []);

  // Intercept clicks on same-page hash links and scroll smoothly with a header offset.
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const anchor = (event.target as Element | null)?.closest?.(
        "a[href]",
      ) as HTMLAnchorElement | null;
      if (!anchor || anchor.target === "_blank") return;

      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin || !url.hash) return;
      if (normalisePath(url.pathname) !== normalisePath(window.location.pathname)) {
        return;
      }

      const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
      if (!target) return;

      event.preventDefault();
      window.history.pushState(null, "", url.hash);
      scrollToTarget(target);
    };

    // Capture phase so Next.js <Link> sees the event as already handled.
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  // After a route change: recalculate trigger positions and honour any hash.
  useEffect(() => {
    const id = window.setTimeout(() => {
      ScrollTrigger.refresh();

      const hash = window.location.hash;
      if (hash) {
        const target = document.getElementById(decodeURIComponent(hash.slice(1)));
        if (target) scrollToTarget(target, false);
      } else {
        scrollToTarget(0, false);
      }
    }, 80);

    return () => window.clearTimeout(id);
  }, [pathname]);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
}
