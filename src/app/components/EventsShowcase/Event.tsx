import Image from "next/image";
import { Pillar } from "./Pillar";

type Thumbnail = {
  path: string;
  extension: "jpg" | "png" | "jpeg";
};

type EventProps = {
  data: {
    id: number;
    thumbnail: Thumbnail;
  };
  isYellow?: boolean;
};

export function Event({ data, isYellow = false }: EventProps) {
  return (
    <div className="relative flex flex-col justify-between">
      <div className="flex gap-2">
        {isYellow ? (
          <>
            <Pillar color="yellow-500" isSmall={true} />
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
        className={`w-[280px] h-72 p-4 hover:scale-105 transition-all duration-500 grid place-content-center border ${
          isYellow
            ? `bg-yellow-500 absolute -left-[156px] bottom-14 border-yellow-900`
            : `bg-red-600 border-red-900`
        }`}
      >
        <Image
          src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
          width={240}
          height={240}
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
  );
}
