"use client";
import { ComicInfo } from "./components/ComicInfo";
import { ComicMoreDetails } from "./components/ComicMoreDetails";
import { RelatedResourcers } from "./components/RelatedResources";
import { Category } from "@/@types/comic";
import { getComic } from "@/utils/getComic";

type Params = {
  comicId: number;
};

type SearchParams = {
  category: Category;
};

interface ComicDetailsProps {
  params: Params;
  searchParams: SearchParams;
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
          <ComicInfo comic={comic} category={category} />
          {category !== "series" && <ComicMoreDetails comic={comic} />}
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
