"use client";
import { Comic } from "./Comic";
import { Comic as ComicType } from "@/@types/comic";
import { Button } from "@/app/components/Button";
import { useComicsList } from "@/hooks/useComicList";
import { useComics } from "@/hooks/useComics";
import { useEffect } from "react";
import { Player as Animation } from "@lottiefiles/react-lottie-player";
import Spiner from "../../../../public/animations/spinner.json";

interface ComicsListProps {
  initialComics: ComicType[];
}

export function ComicsList({ initialComics }: ComicsListProps) {
  const {
    state: { category, order, search, limit },
    dispatch,
  } = useComicsList();
  const { comics, isLoading, isFetching, nextPage, fetchNextPage } = useComics({
    category,
    order,
    search,
    limit,
  });

  function handleLoadMoreButtonClick() {
    nextPage.current = nextPage.current + 1;
    fetchNextPage();
  }

  useEffect(() => {
    if (comics?.length) {
      dispatch({ type: "setAmount", payload: comics.length });
    }
  }, [comics]);

  return (
    <div className="flex flex-col gap-8">
      {!isLoading ? (
        <div className="grid grid-cols-1 xsm:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-3 gap-y-12 w-full">
          {comics.map((comic: ComicType) => (
            <Comic data={comic} />
          ))}
        </div>
      ) : (
        <Animation
          autoplay={true}
          loop={true}
          controls={true}
          src={Spiner}
          style={{ height: "220px", width: "220px" }}
        />
      )}

      <div className="w-max mx-auto mt-6">
        {!isLoading && isFetching ? (
          <Animation
            autoplay={true}
            loop={true}
            controls={true}
            src={Spiner}
            style={{ height: "120px", width: "120px" }}
          />
        ) : (
          !isLoading &&
          nextPage.current !== 5 && (
            <Button title="load more" onClick={handleLoadMoreButtonClick} />
          )
        )}
      </div>
    </div>
  );
}
