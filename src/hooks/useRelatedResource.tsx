"use client";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

import { ApiResponse } from "@/@types/apiResponse";
import { Resource } from "@/@types/resource";
import { Character } from "@/@types/character";
import { Comic } from "@/@types/comic";

import { fetchData } from "@/utils/fetchData";
import { useMemo } from "react";

type ResourceData = Comic | Character;

interface getRelatedResourcesParams {
  originalResource: Resource;
  originalResourceId: number;
  relatedResource: Resource;
  offset: number;
}

async function getRelatedResources({
  originalResource,
  originalResourceId,
  relatedResource,
  offset,
}: getRelatedResourcesParams): Promise<ApiResponse<ResourceData>> {
  const response = await fetchData({
    resource: `${originalResource}/${originalResourceId}/${relatedResource}`,
    offset,
  });

  const data = response.json();
  return data;
}

interface useRelatedResourcesParams {
  originalResource: Resource;
  originalResourceId: number;
  relatedResource: Resource;
}

export function useRelatedResource({
  originalResource,
  originalResourceId,
  relatedResource,
}: useRelatedResourcesParams) {
  const {
    data: response,
    error,
    isLoading,
    isFetching,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    ["relatedResource", originalResource, relatedResource],
    ({ pageParam = 0 }) => {
      return getRelatedResources({
        originalResource,
        originalResourceId,
        relatedResource,
        offset: pageParam * 20,
      });
    },
    {
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.data.results.length ? allPages.length + 1 : undefined;
      },
    }
  );

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
