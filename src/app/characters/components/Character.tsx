import { Character } from "@/@types/character";
import { Link } from "@/app/components/Link";
import Image from "next/image";

interface CharacterProps {
  data: Character;
}

export function Character({ data }: CharacterProps) {
  return (
    <Link path={`characters/${data.id}`} isActive={false}>
      <div
        className="flex flex-col items-center group"
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      >
        <div className="relative w-56 h-48 border-b-4 border-red-600">
          <Image
            src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
            alt={data.name}
            fill
            className="w-auto h-auto"
            // placeholder="blur"
            sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, (min-width: 440px) 50vw, 100vw"
          />
        </div>
        <div className="bg-black w-56 h-24 rounded-br-md p-4 relative">
          <span className="absolute h-0 group-hover:h-full z-20 transition-all duration-200 bg-red-600 top-0 right-0 left-0 bottom-0"></span>
          <strong className="text-sm uppercase text-white w-full z-30 relative">
            {data.name}
          </strong>
        </div>
      </div>
    </Link>
  );
}
