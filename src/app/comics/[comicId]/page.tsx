"use client";
import { useComic } from "@/hooks/useComic";
import { useComicsList } from "@/hooks/useComicList";
import { ComicInfo } from "./components/ComicInfo";
import { ComicMoreDetails } from "./components/ComicMoreDetails";

type Params = {
  comicId: number;
};

interface ComicDetailsProps {
  params: Params;
}

export default function ComicDetails({ params }: ComicDetailsProps) {
  const { state } = useComicsList();
  const { comic } = useComic({ category: state.category, id: params.comicId });

  return (
    <div>
      {comic && (
        <>
          <ComicInfo comic={comic} />
          <ComicMoreDetails comic={comic} />
        </>
      )}
    </div>
  );
}
