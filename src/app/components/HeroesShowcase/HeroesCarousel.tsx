import { Hero, heroes } from "@/utils/heroes";
import Image from "next/image";
import { Link } from "../Link";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { motion } from "framer-motion";

type HeroesCarrouselProps = {
  activeHero: Hero;
  activeHeroIndex: number;
  changeActiveHero: (heroIndex: number) => void;
};

export function HeroesCarousel({
  activeHero,
  activeHeroIndex,
  changeActiveHero,
}: HeroesCarrouselProps) {
  return (
    <div
      key={activeHero.id}
      style={{ backgroundImage: `url('/images/${activeHero.cover}')` }}
      className={`h-[540px] bg-black/70 bg-no-repeat bg-cover bg-center bg-blend-color transition-all duration-200`}
    >
      <div className="max-w-[1200px] w-full h-full mx-auto flex justify-between items-center p-2">
        <div>
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
        <div className="relative flex flex-col items-end h-full w-full">
          <motion.div
            key={activeHero.id}
            animate={{ x: [40, 0], opacity: [0, 1] }}
            transition={{ duration: 0.25 }}
            className="absolute -top-[108px] w-[640px] h-[640px]"
          >
            <Image
              src={`/images/${activeHero.image}`}
              fill
              className="absolute"
              alt={activeHero.name}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>
          <div className="mt-auto w-96">
            <div className="p-2 backdrop-blur-xl">
              <div className="pb-10 px-6 pt-5 border border-gray-200 ">
                <small className="text-white/90">{activeHero.civilName}</small>
                <strong className="block uppercase text-4xl text-white">
                  {activeHero.name}
                </strong>
                <a
                  className="flex items-center group w-max gap-4 text-yellow-500 mt-4 relative before:absolute before:h-[2px] before:bg-yellow-500 before:mt-1 before:-bottom-1 before:rounded before:w-full before:group-hover:w-full"
                  href={`characters/${activeHero.id}`}
                >
                  See hero profile
                  <ArrowRight
                    size={16}
                    className="text-yellow-500 group-hover:translate-x-1 transition-transform duration-200"
                    weight="bold"
                  />
                </a>
                <div className="flex gap-7 items-center mt-6">
                  <div className="flex gap-3">
                    {heroes.map(({ id }) => (
                      <button
                        key={String(id)}
                        className={`block h-2 rounded-full transition-[width] duration-200 ${
                          activeHero.id === id
                            ? "w-4 bg-red-600"
                            : "w-2 bg-white"
                        }`}
                        onClick={() => changeActiveHero(id)}
                      ></button>
                    ))}
                  </div>
                  <div className="flex gap-7">
                    <button
                      disabled={activeHeroIndex === 0}
                      onClick={() => changeActiveHero(activeHeroIndex - 1)}
                      className="text-white disabled:text-white/40"
                    >
                      <ArrowLeft size={20} weight="bold" />
                    </button>

                    <button
                      disabled={activeHeroIndex === heroes.length - 1}
                      onClick={() => changeActiveHero(activeHeroIndex + 1)}
                      className="text-white disabled:text-white/40"
                    >
                      <ArrowRight size={20} weight="bold" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}