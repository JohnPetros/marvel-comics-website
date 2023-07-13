"use client";
import { Button } from "@/app/components/Button";
import { Resource } from "@/@types/resource";
import { useEffect, useRef, useState } from "react";
import { useRelatedResource } from "@/hooks/useRelatedResource";
import { getRelatedResources } from "@/utils/getRelatedResources";

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
  const relatedResources = useRef<Resource[]>([]);
  const {} = useRelatedResource({
    originalResource,
    originalResourceId,
    relatedResource: activeResource,
  });

  useEffect(() => {
    relatedResources.current = getRelatedResources(originalResource);
    setActiveResource(relatedResources.current[0]);
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <div className="space-x-6">
        {relatedResources.current?.map((resource) => (
          <Button
            key={resource}
            title={`Related ${resource}`}
            onClick={() => {}}
            isActive={resource === activeResource}
          ></Button>
        ))}
      </div>
      {/* <ul className="grid grid-cols-5">
        {comics.map((comic: ComicType) => (
          <li>
            <Comic data={comic} />
          </li>
        ))}
      </ul> */}
    </div>
  );
}
