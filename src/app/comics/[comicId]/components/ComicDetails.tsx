import { Comic } from "@/@types/comic";
import { Detail } from "./Detail";

const details = [
  {
    key: "issueNumber",
    title: "Issue Number",
  },
  {
    key: "pageCount",
    title: "Page Count",
  },
  {
    key: "isbn",
    title: "ISBN",
  },
  {
    key: "issn",
    title: "ISSN",
  },
  {
    key: "upc",
    title: "UPC",
  },
];

interface ComicInfoProps {
  comic: Comic;
}

export function ComicMoreDetails({ comic }: ComicInfoProps) {
  return (
    <div className="bg-black">
      <div className="container mx-auto p-12">
        <h3 className="text-white text-2xl font-semibold uppercase">
          More details
        </h3>
        <div className="grid grid-cols-3 mt-6">
          {details.map(({ key, title }) => {
            if (comic[key])
              return <Detail title={title} description={comic[key]} />;
          })}
        </div>
      </div>
    </div>
  );
}
