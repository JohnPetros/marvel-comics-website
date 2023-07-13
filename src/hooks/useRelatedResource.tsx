"use client";
import { useQuery } from "@tanstack/react-query";
import { ApiResponse } from "@/@types/apiResponse";
import { Resource } from "@/@types/resource";
import { fetchData } from "@/utils/fetchData";

interface RelatedResourceParams {
  originalResource: Resource;
  originalResourceId: number;
  relatedResource: Resource | null;
}

async function getRelatedResources({
  originalResource,
  originalResourceId,
  relatedResource,
}: RelatedResourceParams): Promise<ApiResponse<Resource>> {
  const response = await fetchData({
    resource: `${originalResource}/${originalResourceId}/${relatedResource}`,
  });

  console.log(`${originalResource}/${originalResourceId}/${relatedResource}`);

  const data = response.json();

  return data;
}

export function useRelatedResource({
  originalResource,
  originalResourceId,
  relatedResource,
}: RelatedResourceParams) {
  const { data: response, isLoading } = useQuery(
    ["naoSei", relatedResource],
    () =>
      getRelatedResources({
        originalResource,
        originalResourceId,
        relatedResource,
      })
  );

  const resourcesData = response?.data.results;

  return { resourcesData, isLoading };
}