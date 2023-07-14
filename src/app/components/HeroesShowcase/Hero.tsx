import Image from "next/image";
import { Hero, heroes } from "@/utils/heroes";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import Link from "next/link";

type HeroProps = {
  data: Hero;
  activeHeroIndex: number;
  changeActiveHero: (heroIndex: number) => void;
};

export function Hero({ data, activeHeroIndex, changeActiveHero }: HeroProps) {
  return (
    <div className="z-50 relative flex flex-col justify-center items-end h-full w-full">
      <motion.div
        key={data.id}
        animate={{ x: [40, 0], opacity: [0, 1] }}
        transition={{ duration: 0.25 }}
        className="absolute -left-10 -bottom-4 w-[420px] h-[420px] xsm:w-[480px] xsm:h-[480px] xsm:left-auto lg:w-[640px] lg:h-[640px] lg:-top-[108px]"
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
          <div className="pb-10 px-6 pt-5 border border-gray-200 ">
            <small className="text-white/90">{data.civilName}</small>
            <strong className="block uppercase text-4xl text-white">
              {data.name}
            </strong>
            <Link
              className="flex items-center group w-max gap-4 text-yellow-500 mt-4 relative before:absolute before:h-[2px] before:bg-yellow-500 before:mt-1 before:-bottom-1 before:rounded before:w-full before:group-hover:w-full"
              href={`characters/${data.id}`}
            >
              See hero profile
              <ArrowRight
                size={16}
                className="text-yellow-500 group-hover:translate-x-1 transition-transform duration-200"
                weight="bold"
              />
            </Link>
            <div className="grid grid-cols-2 gap-7 items-center mt-6">
              <div className="flex gap-3">
                {heroes.map(({ id }) => (
                  <button
                    key={String(id)}
                    className={`block h-2 rounded-full transition-[width] duration-200 ${
                      data.id === id ? "w-4 bg-red-600" : "w-2 bg-white"
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
  );
}
