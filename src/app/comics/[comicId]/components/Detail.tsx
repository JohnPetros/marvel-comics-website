"use client";
import { Variants, motion } from "framer-motion";
interface DetailProps {
  title: string;
  description: string | number;
}

export function Detail({ title, description }: DetailProps) {
  const detailVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 24,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div variants={detailVariants}>
      <dt className="text-white text-xl capitalize font-bold">{title}</dt>
      <dd className="text-white text-md">{description}</dd>
    </motion.div>
  );
}
