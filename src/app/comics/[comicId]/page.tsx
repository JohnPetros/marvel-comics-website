"use client";
import { useComic } from "@/hooks/useComic";
import { ComicInfo } from "./components/ComicInfo";
import { ComicMoreDetails } from "./components/ComicMoreDetails";
import { RelatedResourcers } from "./components/RelatedResources";
import { Category } from "@/@types/comic";

type Params = {
  comicId: number;
};

interface ComicDetailsProps {
  params: Params;
}

export default function ComicDetails({ params }: ComicDetailsProps) {
  const category = localStorage.getItem(
    "marvel-website@comic_category"
  ) as Category;
  const { comic } = useComic({ category, id: params.comicId });

  return (
    <div>
      {comic && (
        <>
          <ComicInfo comic={comic} category={category} />
          <ComicMoreDetails comic={comic} />
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
