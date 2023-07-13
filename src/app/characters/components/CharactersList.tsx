"use client";
import { Character as CharacterType } from "@/@types/character";
import { useCharacters } from "@/hooks/useCharacters";
import { Player as Animation } from "@lottiefiles/react-lottie-player";
import Spiner from "../../../../public/animations/spinner.json";
import { Character } from "./Character";
import { Button } from "@/app/components/Button";
import { useCharactersList } from "@/hooks/useCharactersList";
import { useEffect } from "react";

interface CharactersListProps {
  initialCharacters: CharacterType[];
}

export function CharactersList({ initialCharacters }: CharactersListProps) {
  const {
    state: { order, search },
    dispatch,
  } = useCharactersList();
  const { characters, isLoading, isFetching, nextPage, fetchNextPage } =
    useCharacters({
      order,
      search,
      initialData: initialCharacters,
    });

  function handleLoadMoreButtonClick() {
    nextPage.current = nextPage.current + 1;
    fetchNextPage();
  }

  useEffect(() => {
    dispatch({ type: "setAmount", payload: characters.length });
  }, [characters]);

  return (
    <div className="flex flex-col gap-8">
      {isLoading ? (
        <Animation
          autoplay={true}
          loop={true}
          controls={true}
          src={Spiner}
          style={{ height: "220px", width: "220px" }}
        />
      ) : !isLoading && characters.length > 0 ? (
        <div className="grid grid-cols-1 xsm:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-3 gap-y-12 w-full">
          {characters.map((comic: CharacterType) => (
            <Character data={comic} />
          ))}
        </div>
      ) : (
        <p className="text-center text-lg text-red-600 uppercase font-bold">
          Sorry, no characters found
        </p>
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
          characters.length > 0 &&
          nextPage.current !== 5 && (
            <Button title="load more" onClick={handleLoadMoreButtonClick} />
          )
        )}
      </div>
    </div>
  );
}
