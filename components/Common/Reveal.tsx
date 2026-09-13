"use client";
import {
  useEffect,
  useRef,
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
} from "react";
import { gsap } from "./gsap";

export type RevealDirection = "up" | "down" | "left" | "right" | "scale" | "none";

const offsets: Record<RevealDirection, gsap.TweenVars> = {
  up: { y: 32 },
  down: { y: -32 },
  left: { x: -40 },
  right: { x: 40 },
  scale: { scale: 0.94 },
  none: {},
};

type RevealProps<T extends ElementType> = {
  /** Element to render (div, li, figure, p ...). */
  as?: T;
  direction?: RevealDirection;
  /** Seconds. Use `0.1 * index` for staggered lists. */
  delay?: number;
  duration?: number;
  /** Play on mount instead of when scrolled into view (above-the-fold content). */
  immediate?: boolean;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children">;

/**
 * GSAP-powered scroll reveal. Drop-in replacement for the old framer-motion
 * `reveal()` preset:
 *
 *   <Reveal direction="up" delay={0.1 * i} className="...">
 *   <Reveal as="li" direction="left">
 *   <Reveal immediate>            // hero content, animates on mount
 */
export default function Reveal<T extends ElementType = "div">({
  as,
  direction = "up",
  delay = 0,
  duration = 0.9,
  immediate = false,
  style,
  children,
  ...rest
}: RevealProps<T>) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      gsap.set(el, { autoAlpha: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, ...offsets[direction] },
        {
          autoAlpha: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration,
          delay,
          ease: "power3.out",
          overwrite: "auto",
          scrollTrigger: immediate
            ? undefined
            : {
                trigger: el,
                // clamp() makes elements near the page bottom still trigger.
                start: "clamp(top 90%)",
                once: true,
              },
        },
      );
    }, el);

    return () => ctx.revert();
    // Direction/delay are static per element; only run once on mount.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const Tag = (as ?? "div") as ElementType;

  return (
    <Tag
      ref={ref}
      // Hidden until GSAP takes over so there is no flash before the reveal.
      style={{ opacity: 0, visibility: "hidden", ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
