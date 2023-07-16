"use client";
import { KeyboardEvent, useEffect, useRef, useState } from "react";
import { useRelatedResource } from "@/hooks/useRelatedResource";

import { Category, Comic as ComicType } from "@/@types/comic";
import { Character as CharacterType } from "@/@types/character";
import { Resource } from "@/@types/resource";
import { Order } from "@/@types/order";

import { Button } from "@/app/components/Button";
import { Character } from "@/app/characters/components/Character";
import { Spinner } from "@/app/components/Spinner";
import { DropDownMenu } from "@/app/components/DropDownMenu";
import { Comic } from "../comics/components/Comic";
import { Search } from "./Search";
import { Pagination } from "./Pagination";
import * as RadixDropdownMenu from "@radix-ui/react-dropdown-menu";

const LIMIT = 20;

type TotalRelatedResource = {
  comics?: number;
  series?: number;
  events?: number;
  characters?: number;
};

interface RelatedComicsProps {
  originalResourceId: number;
  originalResource: Resource;
  totalRelatedResources: TotalRelatedResource;
}

export function RelatedResourcers({
  originalResourceId,
  originalResource,
  totalRelatedResources,
}: RelatedComicsProps) {
  const relatedResourcesKeys = Object.keys(totalRelatedResources) as Resource[];

  const [activeResource, setActiveResource] = useState<Resource>(
    relatedResourcesKeys[0]
  );

  const searchRef = useRef<HTMLInputElement>(null);
  const [searchValue, setSearchValue] = useState("");
  const [order, setOrder] = useState<Order>("asc");

  const relatedResources = useRef<Resource[]>([]);

  const { resourcesData, isLoading, isFetching, offset, setOffset } =
    useRelatedResource({
      originalResource,
      originalResourceId,
      relatedResource: activeResource,
      search: searchValue,
      order,
      limit: LIMIT,
    });

  function isComic(resource: ComicType | CharacterType): resource is ComicType {
    return "creators" in resource;
  }

  function handleRelatedResourceButtonClick(relatedResource: Resource) {
    setOffset(0);
    setActiveResource(relatedResource);
  }

  function submitSearch() {
    if (searchRef.current) {
      setSearchValue(searchRef.current.value.trim().toLocaleLowerCase());
    }
  }

  function handleButtonOrderClick(order: Order) {
    setOrder(order);
  }

  function handleSearchKeyDown({ key }: KeyboardEvent<HTMLInputElement>) {
    if (key === "Enter") {
      submitSearch();
    }
  }

  function handleSearchClick() {
    submitSearch();
  }

  useEffect(() => {
    relatedResources.current = relatedResourcesKeys;
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
      <div className="flex justify-between mt-6">
        <span className="uppercase text-gray-400 text-sm font-bold">
          {resourcesData.length} results
        </span>

        <RadixDropdownMenu.Root>
          <RadixDropdownMenu.Trigger>
            <span className="uppercase text-gray-400 text-sm flex items-center font-bold ">
              sort by {order === "asc" ? "A-Z" : "Z-A"}
            </span>
          </RadixDropdownMenu.Trigger>

          <DropDownMenu
            buttons={[
              {
                id: 1,
                title: "A-Z",
                onClick: () => handleButtonOrderClick("asc"),
                isActive: order === "asc",
              },
              {
                id: 2,
                title: "Z-A",
                onClick: () => handleButtonOrderClick("desc"),
                isActive: order === "desc",
              },
            ]}
          />
        </RadixDropdownMenu.Root>
      </div>
      {isLoading ? (
        <Spinner size={150} />
      ) : resourcesData?.length > 0 ? (
        <ul className="grid grid-cols-1 xsm:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6 mt-8">
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

      {totalRelatedResources[activeResource]! > 20 && (
        <div className="mt-12 mx-auto w-max">
          <Pagination
            itemsPerPage={LIMIT}
            totalItems={totalRelatedResources[activeResource]!}
            offset={offset}
            setOffset={setOffset}
          />
        </div>
      )}
    </div>
  );
}
