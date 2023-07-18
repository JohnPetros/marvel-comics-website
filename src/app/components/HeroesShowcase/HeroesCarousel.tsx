'use client'
import Image from 'next/image'
import { Link } from '../Link'
import { Hero } from './Hero'
import { Hero as HeroType } from '@/utils/heroes'
import { Variants, motion } from 'framer-motion'

type HeroesCarrouselProps = {
  activeHero: HeroType
  activeHeroIndex: number
  changeActiveHero: (heroIndex: number) => void
}

export function HeroesCarousel({
  activeHero,
  activeHeroIndex,
  changeActiveHero,
}: HeroesCarrouselProps) {
  const carouselVariants: Variants = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
    },
  }

  return (
    <motion.div
      variants={carouselVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      className="relative h-[750px] bg-black/70 lg:h-[540px]"
    >
      <span className="absolute bottom-0 left-0 right-0 top-0 z-30 block bg-black/70"></span>
      <div className="absolute bottom-0 left-0 right-0 top-0">
        <motion.div
          key={activeHero.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative h-full w-full"
        >
          <Image
            src={`/images/${activeHero.cover}`}
            alt={activeHero.name}
            fill
          />
        </motion.div>
      </div>

      <div className="mx-auto flex h-full w-11/12 max-w-[1200px] flex-col items-center justify-between py-4 lg:flex-row">
        <div className="z-50">
          <h2 className="leading- text-4xl font-bold uppercase text-white ">
            Best characters
            <br /> ever made in
            <br /> comics
          </h2>
          <p className="my-8 max-w-md text-sm text-white/90">
            Get hooked on a hearty helping of heroes and villains from the
            humble House of Ideas!
          </p>
          <Link path="/characters">Explorer our universe</Link>
        </div>

        <Hero
          data={activeHero}
          activeHeroIndex={activeHeroIndex}
          changeActiveHero={changeActiveHero}
        />
      </div>
    </motion.div>
  )
}
