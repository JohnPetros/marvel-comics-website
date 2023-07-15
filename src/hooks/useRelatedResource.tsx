"use client";
import { useInfiniteQuery } from "@tanstack/react-query";

import { ApiResponse } from "@/@types/apiResponse";
import { Resource } from "@/@types/resource";
import { Character } from "@/@types/character";
import { Comic } from "@/@types/comic";

import { fetchData } from "@/utils/fetchData";
import { useMemo } from "react";
import { Order } from "@/@types/order";

type ResourceData = Comic | Character;

interface getRelatedResourcesParams {
  originalResource: Resource;
  originalResourceId: number;
  relatedResource: Resource;
  offset: number;
  search: string;
  order: Order;
}

function formatSearch(search: string, relatedResource: Resource) {
  if (relatedResource === "characters" || relatedResource === "events") {
    return `nameStartsWith=${search}`;
  }
  return `titleStartsWith=${search}`;
}

function formatOrder(order: Order, relatedResource: Resource) {
  const symbol = order === "desc" ? "-" : "";

  if (relatedResource === "characters" || relatedResource === "events") {
    return `${symbol}name`;
  }
  return `${symbol}title`;
}

async function getRelatedResources({
  originalResource,
  originalResourceId,
  relatedResource,
  offset,
  search,
  order,
}: getRelatedResourcesParams): Promise<ApiResponse<ResourceData>> {
  const response = await fetchData({
    resource: `${originalResource}/${originalResourceId}/${relatedResource}`,
    offset,
    search: search ? formatSearch(search, relatedResource) : "",
    orderParams: [formatOrder(order, relatedResource)],
  });

  const data = response.json();
  return data;
}

interface useRelatedResourcesParams {
  originalResource: Resource;
  originalResourceId: number;
  relatedResource: Resource;
  search: string;
  order: Order;
}

export function useRelatedResource({
  originalResource,
  originalResourceId,
  relatedResource,
  search,
  order,
}: useRelatedResourcesParams) {
  const {
    data: response,
    error,
    isLoading,
    isFetching,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    ["relatedResource", originalResource, relatedResource, search, order],
    ({ pageParam = 0 }) => {
      return getRelatedResources({
        originalResource,
        originalResourceId,
        relatedResource,
        offset: pageParam * 20,
        search,
        order,
      });
    },
    {
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.data.results.length ? allPages.length + 1 : undefined;
      },
    }
  );

  console.log(response?.pages);

  const resourcesData: ResourceData[] = useMemo(() => {
    if (!response?.pages || response.pages[0].code === "RequestThrottled") {
      return [];
    }

    return response.pages.reduce<ResourceData[]>(
      (allResourcesData, currentPage) => {
        const resourcesData = currentPage.data.results;

        return [...allResourcesData, ...resourcesData];
      },
      []
    );
  }, [isFetching]);

  return { resourcesData, isLoading, isFetching, fetchNextPage, hasNextPage };
}
