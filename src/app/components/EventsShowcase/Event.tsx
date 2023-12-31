'use client'
import Image from 'next/image'
import { Pillar } from './Pillar'
import { Variants, motion } from 'framer-motion'
import Link from 'next/link'

type Thumbnail = {
  path: string
  extension: 'jpg' | 'png' | 'jpeg'
}

type EventProps = {
  data: {
    id: number
    thumbnail: Thumbnail
  }
  isYellow?: boolean
}

export function Event({ data, isYellow = false }: EventProps) {
  const eventVariants: Variants = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
    },
  }

  return (
    <motion.div
      variants={eventVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      className="relative flex flex-col justify-between"
    >
      <Link
        href={{
          pathname: `comics/${data.id}`,
          query: { category: 'events' },
        }}
      >
        <div className="flex gap-2">
          {isYellow ? (
            <>
              <Pillar color="yellow-500" isSmall={true} />
              <Pillar color="yellow-500" />
            </>
          ) : (
            <>
              <Pillar color="black" />
              <Pillar color="black" />
              <Pillar color="black" />
              <Pillar color="black" />
            </>
          )}
        </div>
        <a
          href={`/events/${data.id}`}
          className={`grid h-72 w-[240px] place-content-center border p-4 transition-all duration-500 hover:scale-105 xsm:w-[280px] ${
            isYellow
              ? `absolute -left-[156px] bottom-14 border-yellow-900 bg-yellow-500`
              : `border-red-900 bg-red-600`
          }`}
        >
          <Image
            src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
            width={240}
            height={240}
            alt="Comic"
          />
        </a>
        {!isYellow && (
          <div className="flex gap-2">
            <Pillar color="black" />
            <Pillar color="black" />
            <Pillar color="black" />
            <Pillar color="black" />
          </div>
        )}
      </Link>
    </motion.div>
  )
}
