import Image from 'next/image'
import { Hero, heroes } from '@/utils/heroes'
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import Link from 'next/link'

type HeroProps = {
  data: Hero
  activeHeroIndex: number
  changeActiveHero: (heroIndex: number) => void
}

export function Hero({ data, activeHeroIndex, changeActiveHero }: HeroProps) {
  return (
    <div className="relative z-50 flex h-full w-full flex-col items-end justify-center">
      <motion.div
        key={data.id}
        animate={{ x: [40, 0], opacity: [0, 1] }}
        transition={{ duration: 0.25 }}
        className="absolute -bottom-4 -left-10 h-[420px] w-[420px] xsm:left-auto xsm:h-[480px] xsm:w-[480px] lg:-top-[108px] lg:h-[640px] lg:w-[640px]"
      >
        <Image
          src={`/images/${data.image}`}
          fill
          className="absolute"
          alt={data.name}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </motion.div>
      <div className="mt-auto w-96">
        <div className="p-2 backdrop-blur-xl">
          <div className="border border-gray-200 px-6 pb-10 pt-5 ">
            <small className="text-white/90">{data.civilName}</small>
            <strong className="block text-4xl uppercase text-white">
              {data.name}
            </strong>
            <Link
              className="group relative mt-4 flex w-max items-center gap-4 text-yellow-500 before:absolute before:-bottom-1 before:mt-1 before:h-[2px] before:w-full before:rounded before:bg-yellow-500 before:group-hover:w-full"
              href={`characters/${data.id}`}
            >
              See hero profile
              <ArrowRight
                size={16}
                className="text-yellow-500 transition-transform duration-200 group-hover:translate-x-1"
                weight="bold"
              />
            </Link>
            <div className="mt-6 grid grid-cols-2 items-center gap-7">
              <div className="flex gap-3">
                {heroes.map(({ id }) => (
                  <button
                    key={String(id)}
                    className={`block h-2 rounded-full transition-[width] duration-200 ${
                      data.id === id ? 'w-4 bg-red-600' : 'w-2 bg-white'
                    }`}
                    onClick={() => changeActiveHero(id)}
                  ></button>
                ))}
              </div>
              <div className="flex gap-7">
                <motion.button
                  whileHover={{ scale: 1.02, opacity: 0.8 }}
                  whileTap={{ scale: 0.9 }}
                  disabled={activeHeroIndex === 0}
                  onClick={() => changeActiveHero(activeHeroIndex - 1)}
                  className="text-white disabled:text-white/40"
                >
                  <ArrowLeft size={20} weight="bold" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02, opacity: 0.8 }}
                  whileTap={{ scale: 0.9 }}
                  disabled={activeHeroIndex === heroes.length - 1}
                  onClick={() => changeActiveHero(activeHeroIndex + 1)}
                  className="text-white disabled:text-white/40"
                >
                  <ArrowRight size={20} weight="bold" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
