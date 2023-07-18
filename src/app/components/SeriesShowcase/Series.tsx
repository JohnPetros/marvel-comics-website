'use client'
import Image from 'next/image'
import { Variants, motion } from 'framer-motion'
import Link from 'next/link'

type Thumbnail = {
  path: string
  extension: 'jpg' | 'png' | 'jpeg'
}

type SeriesProps = {
  data: {
    id: number
    title: string
    thumbnail: Thumbnail
  }
  index: number
}

export function Series({ data, index }: SeriesProps) {
  console.log(data)

  const seriesVariants: Variants = {
    offscreen: {
      y: 100,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: 0.2 * index,
      },
    },
    hover: {
      y: -8,
      transition: {
        duration: 0.2,
      },
    },
  }

  return (
    <motion.div
      variants={seriesVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      whileHover="hover"
      className="flex h-96 cursor-pointer items-center justify-center bg-yellow-500 p-6"
    >
      <Link
        href={{
          pathname: `comics/${data.id}`,
          query: { category: 'series' },
        }}
        className="relative h-full w-full"
      >
        <Image
          src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
          fill
          alt={data.title}
        />
      </Link>
    </motion.div>
  )
}
