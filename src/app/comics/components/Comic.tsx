"use client";
import Image from "next/image";
import { Comic } from "@/@types/comic";
import { motion } from "framer-motion";
interface ComicProps {
  data: Comic;
}

export function Comic({ data }: ComicProps) {
  return (
    <motion.a
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.25 }}
      href={`comics/${data.id}`}
      className="flex flex-col items-center gap-4 group"
    >
      <div className="relative w-56 h-80 shadow-xl group-hover:-translate-y-4 transition-transform duration-200">
        <Image
          src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
          alt={data.title}
          fill
        />
      </div>
      <strong>{data.title}</strong>
    </motion.a>
  );
}