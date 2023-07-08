"use client";
import { useEffect, useState } from "react";
import { Hero, heroes } from "@/utils/heroes";
import HeroesButtons from "./HeroesButtons";
import { HeroesCarousel } from "./HeroesCarousel";

export function HeroesShowcase() {
  const [activeHero, setActiveHero] = useState<Hero>(heroes[0]);
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);

  function changeActiveHero(heroIndex: number) {
    const hero = heroes[heroIndex];

    if (hero?.id) {
      setActiveHero(hero);
      setActiveHeroIndex(heroIndex);
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const isLastHero = activeHeroIndex === heroes.length - 1;

      if (isLastHero) {
        changeActiveHero(0);
      } else {
        changeActiveHero(activeHeroIndex + 1);
      }
    }, 2500);

    return () => clearInterval(timer);
  }, [activeHeroIndex]);

  return (
    <section id="heroes">
      <HeroesCarousel
        activeHero={activeHero} 
        activeHeroIndex={activeHeroIndex}
        changeActiveHero={changeActiveHero}
      />

      <HeroesButtons
        activeHero={activeHero}
        changeActiveHero={changeActiveHero}
      />
    </section>
  );
}
