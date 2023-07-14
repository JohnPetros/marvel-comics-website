"use client";
import { useEffect, useRef, useState } from "react";
import { useRelatedResource } from "@/hooks/useRelatedResource";

import { getRelatedResources } from "@/utils/getRelatedResources";

import { Button } from "@/app/components/Button";
import { Character } from "@/app/characters/components/Character";
import { Comic } from "../../components/Comic";

import { Category, Comic as ComicType } from "@/@types/comic";
import { Character as CharacterType } from "@/@types/character";
import { Resource } from "@/@types/resource";

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
  const { resourcesData } = useRelatedResource({
    originalResource,
    originalResourceId,
    relatedResource: activeResource,
  });

  function isComic(resource: ComicType | CharacterType): resource is ComicType {
    return "creators" in resource;
  }

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
      {resourcesData && (
        <ul className="grid grid-cols-5 gap-6 mt-12">
          {resourcesData.map((data: ComicType | CharacterType) => (
            <li>
              {isComic(data) ? (
                <Comic
                  data={data}
                  path={String(data.id)}
                  category={activeResource as Category}
                />
              ) : (
                <Character data={data} />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
