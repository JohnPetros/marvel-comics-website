'use client'
import Image from 'next/image'

import { Detail } from './Detail'

import { Category, Comic, Creator } from '@/@types/comic'

import { formatDate } from '@/utils/formatDate'
import { Variants, motion } from 'framer-motion'

import * as Dialog from '@radix-ui/react-dialog'
import { VariantsModal } from './VariantsModal'

interface ComicInfoProps {
  comic: Comic
  category: Category
}

export function ComicInfo({
  comic: {
    title,
    thumbnail,
    dates,
    startYear,
    start,
    description,
    creators,
    prices,
  },
  category,
}: ComicInfoProps) {
  const image = `${thumbnail.path}.${thumbnail.extension}`

  const backgroundVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: 1,
      },
    },
  }

  const imageVariants: Variants = {
    hidden: {
      opacity: 0,
      x: -350,
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

  const detailsVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <div className="relative w-full bg-black py-16">
      <motion.div
        variants={backgroundVariants}
        initial="hidden"
        animate="visible"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: '100%',
        }}
        className=" absolute bottom-0 left-0 right-0 top-0 bg-center bg-no-repeat blur-sm brightness-[0.2]"
      />

      <div className="container relative z-50 mx-auto grid grid-cols-1 gap-16 px-6 xsm:px-0 md:grid-cols-[minmax(250px,350px)_minmax(350px,550px)]">
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          className="relative h-[540px] w-full shadow-lg"
        >
          <Image src={`${image}`} alt={title} fill />
        </motion.div>
        <motion.div
          variants={detailsVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 content-center gap-y-8"
        >
          <h2 className="text-3xl font-bold text-white">{title}</h2>
          <div>
            <dl className="grid grid-cols-3 gap-8">
              <Detail title="Cateogory" description={category} />

              <Detail
                title="Published"
                description={
                  category === 'comics'
                    ? formatDate(new Date(dates[0].date))
                    : category === 'series'
                    ? startYear
                    : formatDate(new Date(start))
                }
              />

              {creators.items.slice(0, 7).map((creator: Creator) => (
                <Detail
                  key={creator.name}
                  title={creator.role}
                  description={creator.name}
                />
              ))}

              {prices && prices[0].price && (
                <Detail
                  title="Price"
                  description={'$' + prices[0].price.toFixed(2)}
                />
              )}
            </dl>

            <div className="mt-8 text-base text-white">{description}</div>
            {/* TODO: Add Comic variants modal */}
            {/* {category === "comics" && (
              <Dialog.Root>
                <Dialog.Trigger className="text-white uppercase">See variants</Dialog.Trigger>

                <VariantsModal />
              </Dialog.Root>
            )} */}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
