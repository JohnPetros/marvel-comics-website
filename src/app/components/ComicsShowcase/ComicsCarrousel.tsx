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

    if (newIndex < 0 || newIndex > comics.length - 1) return;

    setCarousel([newIndex, direction]);
  }

  const comicVariants: Variants = {
    initial: { scale: 0.8, opacity: 0 },
    enter: { scale: 1, opacity: 1 },
    exit: (direction: Direction) => {
      return { x: direction === "next" ? -256 : 256 };
    },
    hover: {
      y: -12,
      transition: { duration: 0.25 },
    },
  };

  return (
    <div className="flex flex-col relative overflow-x-hidden">
      <div className="flex">
        <AnimatePresence initial={false} mode="popLayout" custom={direction}>
          {comics
            .slice(initialIndex, initialIndex + 4)
            .map(({ id, title, thumbnail }) => (
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
          disabled={initialIndex === 0}
          onClick={() => handleCarrouselButtonClick("prev")}
        >
          <ArrowLeft />
        </button>
        <span className="h-1 bg-gray-300 flex-1 rounded pl-2" />
        <button
          className="rounded-full w-8 h-8 grid place-content-center bg-red-600 text-white hover:bg-red-600/60 transition-colors duration-200 disabled:bg-red-600/60"
          disabled={initialIndex === comics.length - 4}
          onClick={() => handleCarrouselButtonClick("next")}
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}
