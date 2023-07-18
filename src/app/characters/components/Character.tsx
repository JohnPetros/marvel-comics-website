import { Character } from '@/@types/character'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface CharacterProps {
  data: Character
  path: string
}

export function Character({ data, path }: CharacterProps) {
  return (
    <Link href={path}>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="group flex flex-col items-center"
        style={{
          maxWidth: '100%',
          height: 'auto',
        }}
      >
        <div className="relative h-56 w-56  overflow-hidden border-b-8 border-red-600">
          <div className="absolute bottom-0 left-0 right-0 top-0 transition-all duration-500 group-hover:scale-110">
            <Image
              src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
              alt={data.name}
              fill
              className="h-auto w-auto"
              // placeholder="blur"
              sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, (min-width: 440px) 50vw, 100vw"
            />
          </div>
        </div>
        <div className="relative h-24 w-56 overflow-hidden rounded-br-3xl bg-black p-4">
          <span className="absolute bottom-0 left-0 right-0 top-0 z-20 h-0 bg-red-600 transition-all duration-200 group-hover:h-full"></span>
          <strong className="relative z-30 w-full text-sm uppercase text-white">
            {data.name}
          </strong>
        </div>
      </motion.div>
    </Link>
  )
}
