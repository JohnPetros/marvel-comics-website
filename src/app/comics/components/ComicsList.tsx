"use client";
import { Comic } from "./Comic";
import { Comic as ComicType } from "@/@types/comic";
import { Button } from "@/app/components/Button";
import { useComicsList } from "@/hooks/useComicList";
import { useComics } from "@/hooks/useComics";
import { useEffect } from "react";
import { Player as Animation } from "@lottiefiles/react-lottie-player";

import Spiner from "../../../../public/animations/spinner.json";

export function ComicsList() {
  const {
    state: { category, order },
    dispatch,
  } = useComicsList();
  const { comics, isLoading } = useComics(category, order);

  useEffect(() => {
    if (comics?.length) {
      dispatch({ type: "setAmount", payload: comics.length });
    }
  }, [comics]);

  return (
    <div className="flex flex-col gap-8">
      {!isLoading ? (
        <div className="grid grid-cols-5 gap-x-3 gap-y-12 w-full">
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
          style={{ height: "250px", width: "250px" }}
        />
      )}
    </div>
  );
}
