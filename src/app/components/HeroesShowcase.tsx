"use client";
import { useState } from "react";
import Image from "next/image";
import { HeroesCarrousel } from "./HeroesCarrousel";
import { Link } from "./Link";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { Hero, heroes } from "@/utils/heroes";

export function HeroesShowcase() {
  const [activeHero, setActiveHero] = useState<Hero>(heroes[0]);

  return (
    <div>
      <div
        className={`h-[540px] bg-black/70 bg-[url('/images/${activeHero.cover}')] bg-no-repeat bg-cover bg-center bg-blend-color`}
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
            <div className="mt-auto w-max">
              <div className="p-2 backdrop-blur-xl">
                <div className="pb-10 px-10 pt-5 border border-gray-200 ">
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
                      {heroes.map((hero) => (
                        <button
                          className={`block h-2 rounded-full ${
                            activeHero.id === hero.id
                              ? "w-4 bg-red"
                              : "w-2 bg-white"
                          }`}
                        ></button>
                      ))}
                    </div>
                    <div className="flex gap-7">
                      <button>
                        <ArrowLeft
                          size={20}
                          className="text-white/40"
                          weight="bold"
                        />
                      </button>

                      <button>
                        <ArrowRight
                          size={20}
                          className="text-white"
                          weight="bold"
                        />
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
              className={`relative w-12 h-12 rounded-full bg-transparent border border-l-4 border-yellow-500/80 overflow-hidden bg-[url('/images/${activeHero.image}')] bg-top`}
              style={{ backgroundSize: "300%" }}
            >
              <Image src={`/images/${image}`} fill alt={name} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
