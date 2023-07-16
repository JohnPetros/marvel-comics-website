"use client";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { ApiResponse } from "@/@types/apiResponse";
import { Resource } from "@/@types/resource";
import { Character } from "@/@types/character";
import { Comic } from "@/@types/comic";
import { Order } from "@/@types/order";
import { fetchData } from "@/utils/fetchData";

type ResourceData = Comic | Character;

interface getRelatedResourcesParams {
  originalResource: Resource;
  originalResourceId: number;
  relatedResource: Resource;
  offset: number;
  search: string;
  order: Order;
  limit: number;
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
  limit,
}: getRelatedResourcesParams): Promise<ApiResponse<ResourceData>> {
  const response = await fetchData({
    resource: `${originalResource}/${originalResourceId}/${relatedResource}`,
    offset,
    search: search ? formatSearch(search, relatedResource) : "",
    orderParams: [formatOrder(order, relatedResource)],
    limit,
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
  limit: number;
}

export function useRelatedResource({
  originalResource,
  originalResourceId,
  relatedResource,
  search,
  order,
  limit,
}: useRelatedResourcesParams) {
  const [offset, setOffset] = useState(0);

  const {
    data: response,
    error,
    isLoading,
    isFetching,
  } = useQuery(
    [
      "relatedResource",
      originalResource,
      relatedResource,
      search,
      order,
      offset,
    ],
    () => {
      return getRelatedResources({
        originalResource,
        originalResourceId,
        relatedResource,
        offset,
        search,
        order,
        limit,
      });
    }
  );

  const resourcesData = response?.data.results ?? [];

  return { resourcesData, isLoading, isFetching, offset, setOffset };
}
