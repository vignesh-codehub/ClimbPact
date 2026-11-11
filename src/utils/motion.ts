import type { Variants } from "framer-motion";

export const fadeIn = (
  direction: "up" | "down" | "left" | "right" = "up",
  delay: number = 0
): Variants => ({
  hidden: {
    y: direction === "up" ? 24 : direction === "down" ? -24 : 0,
    x: direction === "left" ? 24 : direction === "right" ? -24 : 0,
    opacity: 0,
  },
  visible: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
});

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};