"use client";
import { useEffect, useRef } from "react";
import { Comic } from "./Comic";
import { Comic as ComicType } from "@/@types/comic";
import { Button } from "@/app/components/Button";
import { useComics } from "@/app/hooks/useComics";

interface ComicsListProps {
  comics: ComicType[];
}

export function ComicsList({ comics }: ComicsListProps) {
  const limit = useRef(20);
  const { visibleComics, setVisibleComics } = useComics();

  function handleButtonClick() {
    const visibleComics = comics.slice(0, limit.current * 2);
    limit.current = limit.current * 2;
    setVisibleComics(visibleComics);
  }

  useEffect(() => {
    setVisibleComics(comics.slice(0, limit.current));
  }, [comics]);

  if (!visibleComics?.length) {
    return <></>;
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
