"use client";
import Image from "next/image";
import { Variants, motion } from "framer-motion";

type Thumbnail = {
  path: string;
  extension: "jpg" | "png" | "jpeg";
};

type SeriesProps = {
  data: {
    id: number;
    title: string;
    thumbnail: Thumbnail;
  };
  index: number;
};

export function Series({ data, index }: SeriesProps) {
  const seriesVariants: Variants = {
    offscreen: {
      y: 100,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: 0.2 * index,
      },
    },
    hover: {
      y: -8,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      variants={seriesVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      whileHover="hover"
      className="bg-yellow-500 h-96 p-6 flex items-center justify-center cursor-pointer"
    >
      <div className="relative w-full h-full">
        <Image
          src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
          fill
          alt={data.title}
        />
      </div>
    </motion.div>
  );
}
