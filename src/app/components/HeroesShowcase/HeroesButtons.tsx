"use client";
import Image from "next/image";
import { Hero, heroes } from "@/utils/heroes";
import { motion } from "framer-motion";

type HeroesButtonsProps = {
  activeHero: Hero;
  changeActiveHero: (heroIndex: number) => void;
};

export default function HeroesButtons({
  activeHero,
  changeActiveHero,
}: HeroesButtonsProps) {
  return (
    <div className="bg-black z-50">
      <div className="max-w-[1200px] w-full mx-auto grid grid-cols-4 gap-6 xsm:flex xsm:items-center xsm:justify-between xsm:gap-0 p-6 ">
        {heroes.map(({ id, image, name }, index) => (
          <motion.button
            key={String(id)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`relative w-12 h-12 transition-transform duration-200 rounded-full bg-transparent border border-l-4 overflow-hidden bg-[url('/images/${
              activeHero.image
            }')] bg-top ${
              activeHero.id === id
                ? "border-red-600/70"
                : "border-yellow-500/80"
            }`}
            style={{ backgroundSize: "300%" }}
            onClick={() => changeActiveHero(index)}
          >
            <Image src={`/images/${image}`} fill alt={name} />
          </motion.button>
        ))}
      </div>
    </div>
  );
}
