'use client'
import Image from 'next/image'
import { Variants, motion } from 'framer-motion'

type CreatorProps = {
  name: string
  image: string
  link: string
}

export function Creator({ name, image, link }: CreatorProps) {
  const creatorVariants: Variants = {
    offscreen: {
      scale: 0,
      opacity: 0,
    },
    onscreen: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4 },
    },
    hover: {
      scale: 1.1,
      borderColor: 'rgb(239, 68, 68)',
      transition: { duration: 0.2 },
    },
  }

  return (
    <motion.a
      href={link}
      target="_blank"
      className="flex flex-col items-center justify-center"
      variants={creatorVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div
        variants={creatorVariants}
        whileHover="hover"
        className="relative h-48 w-48 overflow-hidden rounded-full border-2 border-gray-500 bg-gray-300 p-2"
      >
        <Image src={`/images/${image}`} alt={name} fill />
      </motion.div>
      <strong className="mt-5 text-red-500">{name}</strong>
    </motion.a>
  )
}
