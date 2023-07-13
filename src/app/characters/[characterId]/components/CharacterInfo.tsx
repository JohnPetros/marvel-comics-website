"use client";
import { Character } from "@/@types/character";
import Image from "next/image";
import { Variants, motion } from "framer-motion";

interface CharacterInfoProps {
  character: Character;
}

export function CharacterInfo({
  character: { name, description, thumbnail },
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
          backgroundSize: "200%",
        }}
        className="bg-no-repeat bg-center absolute left-0 top-0 bottom-0 right-0 brightness-[0.1] blur-sm"
      />

      <div className="container mx-auto z-20 relative h-full flex flex-col sm:flex-row items-center justify-center gap-20">
        <div className="max-w-lg">
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
        </div>
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          className="relative w-[315px] h-[440px] shadow-lg"
        >
          <Image src={`${image}`} alt={name} fill />
        </motion.div>
      </div>
    </div>
  );
}
