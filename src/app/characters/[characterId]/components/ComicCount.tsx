'use client'
import { Category } from '@/@types/comic'
import {
  Variants,
  animate,
  motion,
  useMotionValue,
  useTransform,
} from 'framer-motion'
import { useEffect } from 'react'

interface ComicCountProps {
  count: number
  category: Category
}

export function ComicCount({ count, category }: ComicCountProps) {
  const motionValue = useMotionValue(0)
  const animatedCount = useTransform(motionValue, Math.round)

  const comicCountVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 24,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  useEffect(() => {
    const animation = animate(motionValue, count, { duration: 3 })

    return animation.stop
  }, [])

  return (
    <motion.div
      variants={comicCountVariants}
      className="flex h-24 w-24 flex-col items-center justify-center rounded-full border-4 border-white text-white"
    >
      <motion.dt className="text-lg font-bold">{animatedCount}</motion.dt>
      <dd>{category}</dd>
    </motion.div>
  )
}
