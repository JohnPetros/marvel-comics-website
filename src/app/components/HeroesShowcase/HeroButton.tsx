"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

import { Character } from "@/@types/character";
import { Hero } from "@/utils/heroes";

import { motion } from "framer-motion";
import { api } from "@/services/api";

interface HeroesButtonProps {
  heroId: number;
  heroIndex: number;
  activeHero: Hero;
  changeActiveHero: (heroIndex: number) => void;
}

export function HeroButton({
  heroId,
  heroIndex,
  activeHero,
  changeActiveHero,
}: HeroesButtonProps) {
  const [hero, setHero] = useState<Character | null>(null);

  async function fetchHero() {
    const response = await api.getCharacter(heroId);
    const hero = response.data.results[0];
    setHero(hero);
  }

  useEffect(() => {
    fetchHero();
  }, []);

  if (hero?.id) {
    return (
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`relative w-12 h-12 transition-transform duration-200 rounded-full bg-transparent border border-l-4 overflow-hidden bg-[url('/images/${
          activeHero.image
        }')] bg-top ${
          activeHero.id === heroId ? "border-red-600/70" : "border-white/80"
        }`}
        style={{ backgroundSize: "300%" }}
        onClick={() => changeActiveHero(heroIndex)}
      >
        <Image
          src={`${hero?.thumbnail.path}.${hero?.thumbnail.extension}`}
          fill
          alt={hero.name}
        />
      </motion.button>
    );
  }
}
