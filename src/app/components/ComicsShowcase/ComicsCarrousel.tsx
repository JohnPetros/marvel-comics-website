import Image from "next/image";
import { Comic } from "@/@types/comic";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { ComicButtons } from "./ComicButtons";

type ComicsCarrouselProps = {
  comics: Comic[];
};

export function ComicsCarrousel({ comics }: ComicsCarrouselProps) {
  return (
    <div className="flex flex-col relative">
      <div className="flex">
        {comics.slice(0, 4).map(({ id, title, thumbnail }) => (
          <a key={id} href="#" className="relative block w-64 h-64">
            <Image
              src={`${thumbnail.path}.${thumbnail.extension}`}
              alt={title}
              fill
            />
          </a>
        ))}
      </div>

      <ComicButtons />
    </div>
  );
}
