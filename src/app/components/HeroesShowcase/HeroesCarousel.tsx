"use client";
import { Hero as HeroType } from "@/utils/heroes";
import Image from "next/image";
import { Link } from "../Link";
import { Variants, motion } from "framer-motion";
import { Hero } from "./Hero";

type HeroesCarrouselProps = {
  activeHero: HeroType;
  activeHeroIndex: number;
  changeActiveHero: (heroIndex: number) => void;
};

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
  };

  return (
    <motion.div
      variants={carouselVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      className="h-[750px] relative bg-black/70 lg:h-[540px]"
    >
      <span className="absolute block top-0 left-0 right-0 bottom-0 bg-black/50 z-30"></span>
      <div className="absolute top-0 left-0 right-0 bottom-0">
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

      <div className="w-11/12 max-w-[1200px] mx-auto h-full flex flex-col justify-between items-center py-4 lg:flex-row">
        <div className="z-50">
          <h2 className="text-white text-4xl leading- font-bold uppercase ">
            Best characters
            <br /> ever made in
            <br /> comics
          </h2>
          <p className="text-white/90 max-w-md text-sm my-8">
            Get hooked on a hearty helping of heroes and villains from the
            humble House of Ideas!
          </p>
          <Link path="/characters" name="Explore our universe" />
        </div>

        <Hero
          data={activeHero}
          activeHeroIndex={activeHeroIndex}
          changeActiveHero={changeActiveHero}
        />
      </div>
    </motion.div>
  );
}
