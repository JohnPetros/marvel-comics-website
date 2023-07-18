'use client'
import { Variants, motion } from 'framer-motion'

type HeadingProps = {
  subtitle: string
  title: string
}

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
  }

  return (
    <motion.div
      variants={headingVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.4 }}
    >
      <small className="block text-center text-sm font-bold uppercase text-red-600">
        {subtitle}
      </small>
      <h2 className="mt-2 text-center text-4xl uppercase text-black">
        {title}
      </h2>
    </motion.div>
  )
}
