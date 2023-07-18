import { creators } from '@/utils/creators'
import { Heading } from '../Heading'
import { Paragraph } from '../Paragraph'
import { Creator } from './Creator'
import Image from 'next/image'

export function CreatorsShowcase() {
  return (
    <section
      id="creators"
      aria-label="Creators"
      className="relative mx-auto mt-32 flex w-11/12 max-w-[1200px] flex-col items-center justify-center gap-12"
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 hidden h-full w-full opacity-5 xsm:block">
        <Image src="/images/comic.jpg" alt="" fill />
      </div>

      <div className="grid gap-4">
        <Heading title="Behind the pencils & ink" subtitle="Artist" />
        <Paragraph>
          Got a favourite artist, writer or colour artist. Find out more about
          the world of Marvel artists
        </Paragraph>
      </div>

      <div className="grid grid-cols-1 gap-x-24 gap-y-12 xsm:grid-cols-2 md:grid-cols-3">
        {creators.map(({ id, name, image, link }) => (
          <Creator key={id} name={name} image={image} link={link} />
        ))}
      </div>
    </section>
  )
}
