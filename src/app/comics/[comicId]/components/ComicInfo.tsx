import { Comic } from "@/@types/comic";
import Image from "next/image";
import { Detail } from "./Detail";
import { formatDate } from "@/utils/formatDate";

interface ComicInfoProps {
  comic: Comic;
}

export function ComicInfo({
  comic: { title, thumbnail, dates, description, creators, prices },
}: ComicInfoProps) {
  const image = `${thumbnail.path}.${thumbnail.extension}`;

  return (
    <div className="w-full py-12 relative bg-black">
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "120%",
        }}
        className=" bg-no-repeat bg-center absolute left-0 top-0 bottom-0 right-0 brightness-[0.1] blur-sm"
      ></div>

      <div className="container mx-auto grid grid-cols-[350px_550px] gap-16 relative z-50">
        <div className="relative w-[350px] h-[540px]">
          <Image src={`${image}`} alt={title} fill />
        </div>
        <div className="grid grid-cols-1 gap-y-8 content-center">
          <h2 className="text-white text-3xl font-bold">{title}</h2>
          <div>
            <dl className="grid grid-cols-2 gap-8">
              <Detail
                title="Published"
                description={formatDate(new Date(dates[1].date))}
              />
              {creators.items.map((creator) => (
                <Detail title={creator.role} description={creator.name} />
              ))}
              <Detail title="Price" description={"$" + prices[0].price} />
            </dl>

            <div className="text-base text-white mt-8">{description}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
