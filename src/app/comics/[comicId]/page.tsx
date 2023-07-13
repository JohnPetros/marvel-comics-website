"use client";
import { useComic } from "@/hooks/useComic";
import { useComicsList } from "@/hooks/useComicList";
import { Detail } from "./components/Detail";
import { formatDate } from "@/utils/formatDate";
import Image from "next/image";
import { ComicInfo } from "./components/ComicInfo";
import { ComicMoreDetails } from "./components/ComicDetails";

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
