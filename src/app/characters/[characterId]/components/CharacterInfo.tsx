'use client'
import { Character } from '@/@types/character'
import Image from 'next/image'
import { Variants, motion } from 'framer-motion'
import { ComicCount } from './ComicCount'

interface CharacterInfoProps {
  character: Character
}

export function CharacterInfo({
  character: { name, description, thumbnail, comics, series, events },
}: CharacterInfoProps) {
  const image = `${thumbnail.path}.${thumbnail.extension}`

  const backgroundVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
        delay: 1,
      },
    },
  }

  const textVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 64,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  const comicCountsVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 64,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 1.5,
        staggerChildren: 0.4,
      },
    },
  }

  const imageVariants: Variants = {
    hidden: {
      opacity: 0,
      x: 350,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 50,
        duration: 0.4,
        delay: 1,
      },
    },
  }

  return (
    <div className="relative bg-black px-6 py-48 sm:h-[660px]">
      <motion.div
        variants={backgroundVariants}
        initial="hidden"
        animate="visible"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: '150%',
        }}
        className="absolute bottom-0 left-0 right-0 top-0 bg-center bg-no-repeat blur-sm brightness-[0.1]"
      />

      <div className="container relative z-20 mx-auto flex h-full flex-col items-center justify-center gap-20 sm:flex-row">
        <div className="flex max-w-lg flex-col">
          <motion.h2
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl font-bold uppercase text-white"
          >
            {name}
          </motion.h2>
          <motion.p
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            className="mt-6 text-base text-white"
          >
            {description}
          </motion.p>

          <motion.ul
            variants={comicCountsVariants}
            initial="hidden"
            animate="visible"
            className="mx-auto mt-8 flex gap-8 self-center"
          >
            <li>
              <ComicCount count={comics.available} category="comics" />
            </li>
            <li>
              <ComicCount count={series.available} category="series" />
            </li>
            <li>
              <ComicCount count={events.available} category="events" />
            </li>
          </motion.ul>
        </div>
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          className="relative h-[440px] w-[300px] shadow-lg"
        >
          <Image src={`${image}`} alt={name} fill />
        </motion.div>
      </div>
    </div>
  )
}
