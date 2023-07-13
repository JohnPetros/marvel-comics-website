import { Resource } from "@/@types/resource";

export function getRelatedResources(originalResource: Resource): Resource[] {
  switch (originalResource) {
    case "comics":
      return ["characters", "events"];
    case "series":
      return ["comics", "events", "characters"];
    case "events":
      return ["comics", "series", "characters"];
    case "characters":
      return ["comics", "series", "events"];
    default:
      return ["series", "events", "characters"];
  }
}
