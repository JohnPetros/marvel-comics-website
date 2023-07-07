import Image from "next/image";

type Thumbnail = {
  path: string;
  extension: "jpg" | "png" | "jpeg";
};

type SeriesProps = {
  data: {
    id: number;
    title: string;
    thumbnail: Thumbnail;
  };
};

export function Series({ data }: SeriesProps) {
  return (
    <div className="bg-yellow-500 h-96 p-6 flex items-center justify-center cursor-pointer hover:-translate-y-2 transition-all duration-500">
      <div className="relative w-full h-full">
        <Image
          src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
          fill
          alt={data.title}
        />
      </div>
    </div>
  );
}
