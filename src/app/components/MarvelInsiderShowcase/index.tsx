'use client'
import Image from 'next/image'
import { Link } from '../Link'
import { motion } from 'framer-motion'

export function MarvelInsiderShowcase() {
  return (
    <section
      id="marvel-insider"
      aria-label="Marvel insider apresentation"
      className="relative flex h-[680px] w-full flex-col justify-center"
    >
      <div className="bottom-0 left-0 right-0 top-0 h-[680px] sm:absolute sm:grid sm:grid-cols-[1fr_1.2fr]">
        <div className=" bg-[#000]"></div>

        <motion.div
          initial={{ opacity: 0, x: 250 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ opacity: { delay: 0.2 }, x: { duration: 0.6 } }}
          style={{ backgroundImage: "url('/images/marvel-insider.jpg')" }}
          className="bg-marvel-insider-image relative h-full bg-cover bg-center bg-no-repeat bg-blend-color"
        >
          <span className="absolute bottom-0 left-0 right-0 top-0 bg-red-600/60" />
        </motion.div>
      </div>

      <div className="z-20 bg-[#000] p-12 sm:bg-transparent sm:p-0">
        <motion.div
          initial={{ opacity: 0, x: -250 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ opacity: { delay: 0.2 }, x: { duration: 0.6 } }}
          className="mx-auto w-11/12 max-w-[1200px]"
        >
          <small className="flex items-center gap-2 text-sm font-bold uppercase text-red-600 after:inline-block after:h-1 after:w-12 after:bg-red-600">
            Earn rewards
          </small>

          <div className="relative mt-8 h-32 w-64 lg:h-44 lg:w-96">
            <Image src="/icons/marvel-insider.png" fill alt="Marvel Insider" />
          </div>
          <p className="my-8 w-72 text-left text-white/80">
            Get rewarded for doing what you already do as a fan.
          </p>
          <Link path="/">Join now</Link>
        </motion.div>
      </div>
    </section>
  )
}
