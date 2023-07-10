"use client";
import { useRef, useState } from "react";
import { Comic } from "./Comic";
import { Comic as ComicType } from "@/@types/comic";
import { Button } from "@/app/components/Button";

interface ComicsListProps {
  comics: ComicType[];
}

export function ComicsList({ comics }: ComicsListProps) {
  const limit = useRef(20);
  const [visibleComics, setVisibleComics] = useState<ComicType[]>(
    comics.slice(0, limit.current)
  );

  function handleButtonClick() {
    const visibleComics = comics.slice(0, limit.current * 2);
    limit.current = limit.current * 2;
    setVisibleComics(visibleComics);
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-5 gap-x-2 gap-y-12 w-full">
        {visibleComics.map((comic: ComicType) => (
          <Comic data={comic} />
        ))}
      </div>

      {visibleComics.length !== comics.length && (
        <div className="mx-auto">
          <Button title="load more" onClick={handleButtonClick} />
        </div>
      )}
    </div>
  );
}
