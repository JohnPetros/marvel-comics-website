"use client";
import { Variants, motion } from "framer-motion";

type PillarProps = {
  color: string;
  isSmall?: boolean;
};

export function Pillar({ color, isSmall = false }: PillarProps) {
  const pillarVariants: Variants = {
    offscreen: {
      height: 0,
      opacity: 0,
    },
    onscreen: {
      height: 128,
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: 0.2,
      },
    },
  };

  return (
    <motion.span
      variants={pillarVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      className={`${isSmall ? "h-12" : "h-32"} w-16 bg-${color} border border-${
        color === "yellow-500" ? "yellow-900" : "black"
      }`}
    ></motion.span>
  );
}
