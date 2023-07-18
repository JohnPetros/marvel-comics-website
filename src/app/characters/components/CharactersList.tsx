'use client'
import { useEffect } from 'react'
import { useCharactersList } from '@/hooks/useCharactersList'
import { useCharacters } from '@/hooks/useCharacters'

import { Button } from '@/app/components/Button'
import { Spinner } from '@/app/components/Spinner'
import { Character } from './Character'
import { Character as CharacterType } from '@/@types/character'

export function CharactersList() {
  const {
    state: { order, search },
    dispatch,
  } = useCharactersList()
  const { characters, isLoading, isFetching, hasNextPage, fetchNextPage } =
    useCharacters({
      order,
      search,
    })

  useEffect(() => {
    dispatch({ type: 'setAmount', payload: characters.length })
  }, [characters])

  return (
    <div className="flex flex-col gap-8">
      {isLoading ? (
        <Spinner size={220} />
      ) : !isLoading && characters.length > 0 ? (
        <div className="grid w-full grid-cols-1 gap-x-3 gap-y-12 xsm:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {characters.map((character: CharacterType) => (
            <Character
              key={character.id}
              data={character}
              path={`characters/${character.id}`}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-lg font-bold uppercase text-red-600">
          Sorry, no characters found
        </p>
      )}

      <div className="mx-auto mt-6 w-max">
        {!isLoading && isFetching ? (
          <Spinner size={100} />
        ) : (
          !isLoading &&
          characters.length >= 20 &&
          hasNextPage && (
            <Button title="load more" onClick={() => fetchNextPage()} />
          )
        )}
      </div>
    </div>
  )
}
