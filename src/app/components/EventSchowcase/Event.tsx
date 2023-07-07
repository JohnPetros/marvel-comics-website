import Image from "next/image";
import { Pillar } from "./Pillar";

type EventProps = {
  isYellow?: boolean;
};

export function Event({ isYellow = false }: EventProps) {
  return (
    <div className="relative flex flex-col justify-between">
      <div className="flex gap-2">
        {isYellow ? (
          <>
            <Pillar color="yellow-500" isSmall />
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
      <div
        className={`w-[280px] h-96 p-4 grid place-content-center border ${
          isYellow
            ? `bg-yellow-500 absolute -left-[156px] bottom-14 border-yellow-900`
            : `bg-red/80 border-red`
        }`}
      >
        <Image src="/images/event.png" width={224} height={360} alt="Comic" />
      </div>
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
