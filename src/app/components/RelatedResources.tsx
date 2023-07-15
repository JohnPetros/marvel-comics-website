"use client";
import { KeyboardEvent, useEffect, useRef, useState } from "react";
import { useRelatedResource } from "@/hooks/useRelatedResource";

import { getRelatedResources } from "@/utils/getRelatedResources";

import { Button } from "@/app/components/Button";
import { Character } from "@/app/characters/components/Character";
import { Comic } from "../comics/components/Comic";

import { Category, Comic as ComicType } from "@/@types/comic";
import { Character as CharacterType } from "@/@types/character";
import { Resource } from "@/@types/resource";
import { Spinner } from "@/app/components/Spinner";
import { Search } from "./Search";

interface RelatedComicsProps {
  originalResourceId: number;
  originalResource: Resource;
}

export function RelatedResourcers({
  originalResourceId,
  originalResource,
}: RelatedComicsProps) {
  const [activeResource, setActiveResource] = useState<Resource>(
    getRelatedResources(originalResource)[0]
  );

  const searchRef = useRef<HTMLInputElement>(null);
  const [searchValue, setSearchValue] = useState("");

  const relatedResources = useRef<Resource[]>([]);

  const { resourcesData, isLoading, isFetching, hasNextPage, fetchNextPage } =
    useRelatedResource({
      originalResource,
      originalResourceId,
      relatedResource: activeResource,
      search: searchValue,
    });

  function isComic(resource: ComicType | CharacterType): resource is ComicType {
    return "creators" in resource;
  }

  function handleRelatedResourceButtonClick(relatedResource: Resource) {
    setActiveResource(relatedResource);
  }

  function submitSearch() {
    if (searchRef.current) {
      setSearchValue(searchRef.current.value.trim().toLocaleLowerCase());
    }
  }

  // function handleButtonOrderClick(order: Order) {
  //   dispatch({ type: "setOrder", payload: order });
  // }

  function handleSearchKeyDown({ key }: KeyboardEvent<HTMLInputElement>) {
    if (key === "Enter") {
      submitSearch();
    }
  }

  function handleSearchClick() {
    submitSearch();
  }

  useEffect(() => {
    relatedResources.current = getRelatedResources(originalResource);
    setActiveResource(relatedResources.current[0]);
  }, []);

  return (
    <div className="md:container mx-auto mt-8 px-6 md:px-0">
      <div className="flex gap-6 overflow-x-auto">
        {relatedResources.current?.map((relatedResource) => (
          <Button
            key={relatedResource}
            title={`Related ${relatedResource}`}
            onClick={() => handleRelatedResourceButtonClick(relatedResource)}
            isActive={relatedResource === activeResource}
          ></Button>
        ))}
      </div>
      <div className="mt-6">
        <Search
          inputRef={searchRef}
          onKeyDown={handleSearchKeyDown}
          onClick={handleSearchClick}
        />
      </div>
      {isLoading ? (
        <Spinner size={150} />
      ) : resourcesData?.length > 0 ? (
        <ul className="grid grid-cols-1 xsm:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6 mt-12">
          {resourcesData.map((data: ComicType | CharacterType) => (
            <li>
              {isComic(data) ? (
                <Comic
                  data={data}
                  path={`/comics/${String(data.id)}`}
                  category={activeResource as Category}
                />
              ) : (
                <Character data={data} path={`/characters/${data.id}`} />
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-lg text-red-600 uppercase font-bold mt-20">
          Sorry, no {activeResource} found
        </p>
      )}

      <div className="w-max mx-auto mt-12">
        {!isLoading && isFetching ? (
          <Spinner size={120} />
        ) : (
          !isLoading &&
          resourcesData.length >= 20 &&
          hasNextPage && (
            <Button title="load more" onClick={() => fetchNextPage()} />
          )
        )}
      </div>
    </div>
  );
}
