"use client";
import Image from "next/image";
import { Comic } from "@/@types/comic";
import { AnimatePresence, Variants, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import Link from "next/link";
const endIndex = innerWidth > 640 ? 4 : innerWidth > 440 ? 3 : 2;

type ComicsCarrouselProps = {
  comics: Comic[];
};

type Direction = "next" | "prev";

export function ComicsCarrousel({ comics }: ComicsCarrouselProps) {
  const [[startIndex, direction], setCarousel] = useState<[number, Direction]>([
    0,
    "next",
  ]);

  const [visibleComics, setVisibleComics] = useState<Comic[]>(
    comics.slice(0, endIndex)
  );
  const [activeComic, setActiveComic] = useState<Comic>(comics[0]);

  function handleCarrouselButtonClick(direction: Direction) {
    let newIndex = startIndex;

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

    let visibleComics = comics.slice(startIndex, startIndex + endIndex);

    if (visibleComics.length < endIndex) {
      const firstIndexes = 4 - visibleComics.length;
      const firstComics = comics.slice(0, firstIndexes);
      visibleComics = [...visibleComics, ...firstComics];
    }

    setActiveComic(visibleComics[0]);
    setVisibleComics(visibleComics);
  }

  const comicVariants: Variants = {
    initial: { scale: 0.8, opacity: 0 },
    enter: { scale: 1, opacity: 1 },
    exit: (direction: Direction) => {
      return { x: direction === "next" ? -256 : 256, scale: 0.8, opacity: 0 };
    },
    active: {
      opacity: 1,
      scale: 1.05,
      zIndex: 15,
      boxShadow: "0 0 12px 8px rgba(234, 179, 8, .8)",
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.25 },
    },
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleCarrouselButtonClick("next");
    }, 2500);

    return () => clearInterval(timer);
  }, [activeComic.id, startIndex, direction]);

  return (
    <div className="w-11/12 max-w-[1200px] mx-auto flex flex-col relative pl-4 pt-8 mt-6 overflow-x-hidden">
      <div className="flex">
        <AnimatePresence initial={false} mode="popLayout" custom={direction}>
          {visibleComics.map(({ id, title, thumbnail }, index) => (
            <motion.div
              key={id}
              layout
              variants={comicVariants}
              custom={direction}
              initial="initial"
              animate={index === 0 ? "active" : "enter"}
              exit="exit"
              whileHover="hover"
              transition={{ type: "tween" }}
              className={`relative block w-96 h-96 sm:w-72 sm:h-72`}
            >
              <Link
                href={{
                  pathname: `/comics/${id}`,
                  query: { category: "comics" },
                }}
              >
                <Image
                  src={`${thumbnail.path}.${thumbnail.extension}`}
                  alt={title}
                  fill
                />
              </Link>
            </motion.div>
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
