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

export default async function ComicDetails({
  params,
  searchParams,
}: ComicDetailsProps) {
  const { category } = searchParams;
  const response = await getComic({
    category,
    id: params.comicId,
  });
  const comic = response.data.results[0];

  return (
    <div>
      {comic.id && (
        <>
          <Header comicId={comic.id} comicCategory={category} />
          <ComicInfo comic={comic} category={category} />
          {category === "series" && <ComicMoreDetails comic={comic} />}
          {category !== "comics" && (
            <RelatedResourcers
              originalResourceId={comic.id}
              originalResource={category}
            />
          )}
        </>
      )}
    </div>
  );
}
