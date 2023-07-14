"use client";
import { useEffect } from "react";
import { useCharactersList } from "@/hooks/useCharactersList";
import { useCharacters } from "@/hooks/useCharacters";

import { Button } from "@/app/components/Button";
import { Spinner } from "@/app/components/Spinner";
import { Character } from "./Character";

import { Character as CharacterType } from "@/@types/character";

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
        <Spinner size={220} />
      ) : !isLoading && characters.length > 0 ? (
        <div className="grid grid-cols-1 xsm:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-3 gap-y-12 w-full">
          {characters.map((character: CharacterType) => (
            <Character data={character} path={`characters/${character.id}`} />
          ))}
        </div>
      ) : (
        <p className="text-center text-lg text-red-600 uppercase font-bold">
          Sorry, no characters found
        </p>
      )}

      <div className="w-max mx-auto mt-6">
        {!isLoading && isFetching ? (
          <Spinner size={120} />
        ) : (
          !isLoading &&
          characters.length >= 20 &&
          nextPage.current !== 5 && (
            <Button title="load more" onClick={handleLoadMoreButtonClick} />
          )
        )}
      </div>
    </div>
  );
}
