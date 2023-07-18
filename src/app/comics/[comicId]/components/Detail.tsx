'use client'
import { Variants, motion } from 'framer-motion'
interface DetailProps {
  title: string
  description: string | number
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
  }

  return (
    <motion.div variants={detailVariants}>
      <dt className="text-xl font-bold capitalize text-white">{title}</dt>
      <dd className="text-md capitalize text-white">{description}</dd>
    </motion.div>
  )
}
