import { ComicInfo } from "./components/ComicInfo";
import { ComicMoreDetails } from "./components/ComicMoreDetails";
import { RelatedResourcers } from "../../components/RelatedResources";
import { Header } from "./components/Header";

import { Category } from "@/@types/comic";
import { getComic } from "@/utils/getComic";

interface ComicDetailsProps {
  searchParams: { category: Category };
  params: { comicId: number };
}

type TotalRelatedResource = {
  comics?: number;
  series?: number;
  events?: number;
  characters?: number;
};

export default async function ComicDetails({
  params,
  searchParams,
}: ComicDetailsProps) {
  const { category } = searchParams;
  const response = await getComic({
    category,
    id: params.comicId,
  });

  if (response.code === "ResourceNotFound") {
    throw new Error(`404 Comic not found`);
  }

  const comic = response.data.results[0];

  function getTotalRelatedResources(category: Category): TotalRelatedResource {
    const { comics, series, events, characters } = comic;

    switch (category) {
      case "series":
        return {
          comics: comics.available,
          events: events.available,
          characters: characters.available,
        };
      case "events":
        return {
          comics: comics.available,
          series: series.available,
          characters: characters.available,
        };
      default:
        return {
          comics: comics.available,
          series: series.available,
          characters: characters.available,
        };
    }
  }

  return (
    <div>
      {comic.id && (
        <>
          <Header comicId={comic.id} comicCategory={category} />
          <ComicInfo comic={comic} category={category} />
          {category === "comics" && <ComicMoreDetails comic={comic} />}
          {category !== "comics" && (
            <RelatedResourcers
              originalResourceId={comic.id}
              originalResource={category}
              totalRelatedResources={getTotalRelatedResources(category)!}
            />
          )}
        </>
      )}
    </div>
  );
}
