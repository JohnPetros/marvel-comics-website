"use client";
import { useState } from "react";
import Image from "next/image";
import { Link } from "./Link";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { Hero, heroes } from "@/utils/heroes";

export function HeroesShowcase() {
  const [activeHero, setActiveHero] = useState<Hero>(heroes[0]);
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);

  function handleHeroButtonClick(heroId: number) {
    const hero = heroes.find(({ id }) => id === heroId)!;
    const index = heroes.findIndex(({ id }) => id === heroId);

    setActiveHero(hero);
    setActiveHeroIndex(index);
  }

  function handleNextHeroButtonClick() {
    const nextHeroIndex = activeHeroIndex + 1;
    const nextHero = heroes[nextHeroIndex];

    if (nextHero.id) {
      setActiveHero(nextHero);
      setActiveHeroIndex(nextHeroIndex);
    }
  }

  function handlePrevHeroButtonClick() {
    const prevHeroIndex = activeHeroIndex - 1;
    const prevHero = heroes[prevHeroIndex];

    if (prevHero.id) {
      setActiveHero(prevHero);
      setActiveHeroIndex(prevHeroIndex);
    }
  }

  return (
    <div>
      <div
        style={{ backgroundImage: `url('/images/${activeHero.cover}')` }}
        className={`h-[540px] bg-black/70 bg-no-repeat bg-cover bg-center bg-blend-color`}
      >
        <div className="max-w-[1200px] w-full h-full mx-auto flex justify-between items-center p-2">
          <div>
            <h1 className="text-white text-4xl leading- font-bold uppercase ">
              Best characters
              <br /> ever made in
              <br /> comics
            </h1>
            <p className="text-white/90 max-w-sm  text-sm uppercase my-8">
              Get hooked on a hearty helping of heroes and villains from the
              humble House of Ideas!
            </p>
            <Link path="/characters" name="Explore our universe" />
          </div>
          <div className="relative flex flex-col items-end h-full w-full">
            <div className="absolute -top-[108px] w-[640px] h-[640px]">
              <Image
                src={`/images/${activeHero.image}`}
                fill
                className="absolute"
                alt="Spider-man"
              />
            </div>
            <div className="mt-auto w-96">
              <div className="p-2 backdrop-blur-xl">
                <div className="pb-10 px-6 pt-5 border border-gray-200 ">
                  <small className="text-white/90">
                    {activeHero.civilName}
                  </small>
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
                          className={`block h-2 rounded-full transition-all duration-200 ${
                            activeHero.id === id ? "w-4 bg-red" : "w-2 bg-white"
                          }`}
                          onClick={() => handleHeroButtonClick(id)}
                        ></button>
                      ))}
                    </div>
                    <div className="flex gap-7">
                      <button
                        disabled={activeHeroIndex === 0}
                        onClick={handlePrevHeroButtonClick}
                        className="text-white disabled:text-white/40"
                      >
                        <ArrowLeft size={20} weight="bold" />
                      </button>

                      <button
                        disabled={activeHeroIndex === heroes.length - 1}
                        onClick={handleNextHeroButtonClick}
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

      <div className="bg-black">
        <div className="max-w-[1200px] w-full mx-auto flex items-center justify-between p-6">
          {heroes.map(({ id, image, name }) => (
            <button
              className={`relative w-12 h-12 hover:scale-110 transition-transform duration-200 rounded-full bg-transparent border border-l-4 overflow-hidden bg-[url('/images/${
                activeHero.image
              }')] bg-top ${
                activeHero.id === id ? "border-red/70" : "border-yellow-500/80"
              }`}
              style={{ backgroundSize: "300%" }}
              onClick={() => handleHeroButtonClick(id)}
            >
              <Image src={`/images/${image}`} fill alt={name} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
