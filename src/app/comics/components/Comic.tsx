'use client'
import Image from 'next/image'
import { Category, Comic } from '@/@types/comic'
import { motion } from 'framer-motion'
import Link from 'next/link'
interface ComicProps {
  data: Comic
  path: string
  category: Category
}

export function Comic({ data, category, path }: ComicProps) {
  return (
    <Link
      href={{
        pathname: path,
        query: { category },
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }}
        className="group flex flex-col items-center gap-4"
        style={{
          maxWidth: '100%',
          height: 'auto',
        }}
      >
        <div className="relative h-96 w-[236px] shadow-xl transition-transform duration-200 group-hover:-translate-y-4">
          <Image
            src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
            alt={data.title}
            fill
            className="h-auto w-auto"
            sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, (min-width: 440px) 50vw, 100vw"
          />
        </div>
        <strong className="w-full text-sm text-black group-hover:text-red-600">
          {data.title}
        </strong>
      </motion.div>
    </Link>
  )
}
