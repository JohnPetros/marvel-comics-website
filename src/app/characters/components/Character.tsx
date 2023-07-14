import { Character } from "@/@types/character";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface CharacterProps {
  data: Character;
  path: string;
}

export function Character({ data, path }: CharacterProps) {
  return (
    <Link
      href={{
        pathname: `/${path}`,
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center group"
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      >
        <div className="relative w-56 h-56  border-b-8 border-red-600 overflow-hidden">
          <div className="absolute top-0 left-0 bottom-0 right-0 group-hover:scale-110 transition-all duration-500">
            <Image
              src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
              alt={data.name}
              fill
              className="w-auto h-auto"
              // placeholder="blur"
              sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, (min-width: 440px) 50vw, 100vw"
            />
          </div>
        </div>
        <div className="bg-black w-56 h-24 rounded-br-3xl overflow-hidden p-4 relative">
          <span className="absolute h-0 group-hover:h-full z-20 transition-all duration-200 bg-red-600 top-0 right-0 left-0 bottom-0"></span>
          <strong className="text-sm uppercase text-white w-full z-30 relative">
            {data.name}
          </strong>
        </div>
      </motion.div>
    </Link>
  );
}
