"use client";
import Image from "next/image";
import { Comic } from "@/@types/comic";
import { AnimatePresence, Variants, motion } from "framer-motion";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";

type ComicsCarrouselProps = {
  comics: Comic[];
};

type Direction = "next" | "prev";

export function ComicsCarrousel({ comics }: ComicsCarrouselProps) {
  const [visibleComics, setVisibleComics] = useState<Comic[]>(
    comics.slice(0, 4)
  );
  const [[initialIndex, direction], setCarousel] = useState<
    [number, Direction]
  >([0, "next"]);

  function handleCarrouselButtonClick(direction: Direction) {
    let newIndex = initialIndex;

    if (direction === "next") {
      newIndex++;
    } else if (direction === "prev") {
      newIndex--;
    }

    const lastIndex = comics.length - 1;

    if (newIndex < 0) {
      newIndex = lastIndex;
    } else if (newIndex > lastIndex) {
      newIndex = 0;
    }

    setCarousel([newIndex, direction]);

    let visibleComics = comics.slice(initialIndex, initialIndex + 4);

    if (visibleComics.length < 4) {
      const firstIndexes = 4 - visibleComics.length;
      const firstComics = comics.slice(0, firstIndexes);
      visibleComics = [...visibleComics, ...firstComics];
    }
    setVisibleComics(visibleComics);
  }

  const comicVariants: Variants = {
    initial: { scale: 0.8, opacity: 0 },
    enter: { scale: 1, opacity: 1 },
    exit: (direction: Direction) => {
      return { x: direction === "next" ? -256 : 256 };
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.25 },
    },
  };

  return (
    <div className="flex flex-col relative overflow-x-hidden">
      <div className="flex">
        <AnimatePresence initial={false} mode="popLayout" custom={direction}>
          {visibleComics.map(({ id, title, thumbnail }) => (
            <motion.a
              key={id}
              layout
              variants={comicVariants}
              custom={direction}
              initial="initial"
              animate="enter"
              exit="exit"
              whileHover="hover"
              transition={{ type: "tween" }}
              href="#"
              className={`relative block bg-red-400 w-64 h-64`}
            >
              <Image
                src={`${thumbnail.path}.${thumbnail.extension}`}
                alt={title}
                fill
              />
            </motion.a>
          ))}
        </AnimatePresence>
      </div>

      <div className="flex gap-2 w-full items-center mt-8">
        <button
          className="rounded-full w-8 h-8 grid place-content-center bg-red-600 text-white hover:bg-red-600/60  transition-all duration-200 disabled:bg-red-600/60"
          onClick={() => handleCarrouselButtonClick("prev")}
        >
          <ArrowLeft />
        </button>
        <span className="h-1 bg-gray-300 flex-1 rounded pl-2" />
        <button
          className="rounded-full w-8 h-8 grid place-content-center bg-red-600 text-white hover:bg-red-600/60 transition-colors duration-200 disabled:bg-red-600/60"
          onClick={() => handleCarrouselButtonClick("next")}
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}
