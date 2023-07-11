"use client";
import { Comic } from "./Comic";
import { Comic as ComicType } from "@/@types/comic";
import { Button } from "@/app/components/Button";
import { useComicsList } from "@/hooks/useComicList";
import { useComics } from "@/hooks/useComics";
import { useEffect } from "react";

interface ComicsListProps {
  initialComics: ComicType[];
}

export function ComicsList({ initialComics }: ComicsListProps) {
  const { setComicsAmount } = useComicsList();
  const { comics } = useComics(initialComics);

  useEffect(() => {
    if (comics.length) {
      setComicsAmount(comics.length);
    }
  }, [comics]);

  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-5 gap-x-3 gap-y-12 w-full">
        {comics.map((comic: ComicType) => (
          <Comic data={comic} />
        ))}
      </div>

      {/* {visibleComics.length !== 100 && (
        <div className="mx-auto">
          <Button title="load more" onClick={handleButtonClick} />
        </div>
      )} */}
    </div>
  );
}
