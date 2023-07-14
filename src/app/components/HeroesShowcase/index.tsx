"use client";
import { useEffect, useState } from "react";
import { Hero, heroes } from "@/utils/heroes";
import { HeroesCarousel } from "./HeroesCarousel";
import { HeroButton } from "./HeroButton";

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
    <section id="heroes" aria-label="Heroes" className="mt-32">
      <HeroesCarousel
        activeHero={activeHero}
        activeHeroIndex={activeHeroIndex}
        changeActiveHero={changeActiveHero}
      />

      <div className="bg-black z-50">
        <div className="max-w-[1200px] w-full mx-auto grid grid-cols-4 gap-6 xsm:flex xsm:items-center xsm:justify-between xsm:gap-0 p-6">
          {heroes.map(({ id }, index) => (
            <HeroButton
              key={String(id)}
              heroId={id}
              heroIndex={index}
              activeHero={activeHero}
              changeActiveHero={changeActiveHero}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
