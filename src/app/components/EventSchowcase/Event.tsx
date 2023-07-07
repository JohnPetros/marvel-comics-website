import Image from 'next/image'
import { Pillar } from './Pillar'

type Thumbnail = {
  path: string
  extension:
    | 'jpg'
    | 'png'
    | 'jpeg'
}

type EventProps = {
  data: {
    id: number
    thumbnail: Thumbnail
  }
  isYellow?: boolean
}

export function Event({
  data,
  isYellow = false,
}: EventProps) {
  return (
    <div className="relative flex flex-col justify-between">
      <div className="flex gap-2">
        {isYellow ? (
          <>
            <Pillar
              color="yellow-500"
              isSmall={
                true
              }
            />
            <Pillar color="yellow-500" />
          </>
        ) : (
          <>
            <Pillar color="black" />
            <Pillar color="black" />
            <Pillar color="black" />
            <Pillar color="black" />
          </>
        )}
      </div>
      <a
        href={`/events/${data.id}`}
        className={`w-[140px] h-96 p-4 group grid place-content-center border ${
          isYellow
            ? `bg-yellow-500 absolute -left-[156px] bottom-14 border-yellow-900`
            : `bg-red/80 border-red`
        }`}
      >
        <Image
          src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
          className="group-hover:scale-[1.01] transition-all duration-250"
          width={224}
          height={220}
          alt="Comic"
        />
      </a>
      {!isYellow && (
        <div className="flex gap-2">
          <Pillar color="black" />
          <Pillar color="black" />
          <Pillar color="black" />
          <Pillar color="black" />
        </div>
      )}
    </div>
  )
}
