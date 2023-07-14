"use client";
import { Character } from "@/@types/character";
import Image from "next/image";
import { Variants, motion } from "framer-motion";
import { ComicCount } from "./ComicCount";

interface CharacterInfoProps {
  character: Character;
}

export function CharacterInfo({
  character: { name, description, thumbnail, comics, series, events },
}: CharacterInfoProps) {
  const image = `${thumbnail.path}.${thumbnail.extension}`;

  const backgroundVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
        delay: 1,
      },
    },
  };

  const textVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 64,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const comicCountsVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 64,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 1.5,
        staggerChildren: 0.4,
      },
    },
  };

  const imageVariants: Variants = {
    hidden: {
      opacity: 0,
      x: 350,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        duration: 0.4,
        delay: 1,
      },
    },
  };

  return (
    <div className="relative px-6 py-48 sm:h-[660px] bg-black">
      <motion.div
        variants={backgroundVariants}
        initial="hidden"
        animate="visible"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "150%",
        }}
        className="bg-no-repeat bg-center absolute left-0 top-0 bottom-0 right-0 brightness-[0.1] blur-sm"
      />

      <div className="container mx-auto z-20 relative h-full flex flex-col sm:flex-row items-center justify-center gap-20">
        <div className="flex flex-col max-w-lg">
          <motion.h2
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-white text-4xl font-bold uppercase"
          >
            {name}
          </motion.h2>
          <motion.p
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            className="text-white text-base mt-6"
          >
            {description}
          </motion.p>

          <motion.ul
            variants={comicCountsVariants}
            initial="hidden"
            animate="visible"
            className="flex mx-auto gap-8 self-center mt-8"
          >
            <li>
              <ComicCount count={comics.available} category="comics" />
            </li>
            <li>
              <ComicCount count={series.available} category="series" />
            </li>
            <li>
              <ComicCount count={events.available} category="events" />
            </li>
          </motion.ul>
        </div>
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          className="relative w-[300px] h-[440px] shadow-lg"
        >
          <Image src={`${image}`} alt={name} fill />
        </motion.div>
      </div>
    </div>
  );
}
