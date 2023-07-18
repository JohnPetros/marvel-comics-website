'use client'
import { useEffect } from 'react'
import { useComics } from '@/hooks/useComics'
import { useComicsList } from '@/hooks/useComicList'

import { Comic } from './Comic'
import { Button } from '@/app/components/Button'
import { Spinner } from '@/app/components/Spinner'

import { Category, Comic as ComicType } from '@/@types/comic'
import { useSearchParams } from 'next/navigation'

export function ComicsList() {
  const {
    state: { category, order, search },
    dispatch,
  } = useComicsList()
  const searchParams = useSearchParams()

  function getCurrentCategory(): Category {
    const searchCategory = searchParams.get('category') as Category

    if (category) {
      return category
    } else if (searchCategory) {
      return searchCategory
    } else {
      return 'comics'
    }
  }

  const currentCategory = getCurrentCategory()

  const { comics, isLoading, isFetching, hasNextPage, fetchNextPage } =
    useComics({
      category: currentCategory,
      order,
      search,
    })

  useEffect(() => {
    dispatch({
      type: 'setCategory',
      payload: currentCategory,
    })

    return () =>
      dispatch({
        type: 'resetState',
      })
  }, [])

  useEffect(() => {
    dispatch({ type: 'setAmount', payload: comics.length })
  }, [comics])

  return (
    <div className="flex flex-col gap-8">
      {isLoading ? (
        <Spinner size={220} />
      ) : !isLoading && comics.length > 0 ? (
        <div className="grid w-full grid-cols-1 gap-x-3 gap-y-12 xsm:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {comics.map((comic: ComicType) => (
            <Comic
              key={comic.is}
              data={comic}
              path={`comics/${comic.id}`}
              category={category!}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-lg font-bold uppercase text-red-600">
          Sorry, no comics found
        </p>
      )}

      <div className="mx-auto mt-6 w-max">
        {!isLoading && isFetching ? (
          <Spinner size={100} />
        ) : (
          !isLoading &&
          comics.length >= 20 &&
          hasNextPage && (
            <Button title="load more" onClick={() => fetchNextPage()} />
          )
        )}
      </div>
    </div>
  )
}
