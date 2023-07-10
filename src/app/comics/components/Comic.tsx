import { Comic } from "@/@types/comic";
import Image from "next/image";

interface ComicProps {
  data: Comic;
}

export function Comic({ data }: ComicProps) {
  return (
    <a href={`comics/${data.id}`} className="flex flex-col items-center gap-2">
      <div className="relative w-56 h-80">
        <Image
          src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
          alt={data.title}
          fill
        />
      </div>
      <strong>{data.title}</strong>
    </a>
  );
}
