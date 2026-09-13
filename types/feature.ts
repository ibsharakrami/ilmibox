import React from "react";

export type Feature = {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  /** Short category label shown above the title. */
  tag?: string;
  /** Tailwind classes for the icon tile (background + text colour). */
  accent?: string;
  /** Renders as the large, dark hero card that spans two columns. */
  featured?: boolean;
  /** Small chips listed on the featured card. */
  highlights?: string[];
};
