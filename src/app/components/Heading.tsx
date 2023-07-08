"use client";
import { Variants, motion } from "framer-motion";

type HeadingProps = {
  subtitle: string;
  title: string;
};

export function Heading({ subtitle, title }: HeadingProps) {
  const headingVariants: Variants = {
    offscreen: {
      opacity: 0,
      y: 24,
    },
    onscreen: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      variants={headingVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.4 }}
    >
      <small className="uppercase block text-sm text-red-600 text-center font-bold">
        {subtitle}
      </small>
      <h2 className="uppercase text-black text-4xl text-center mt-2">
        {title}
      </h2>
    </motion.div>
  );
}
