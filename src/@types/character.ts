import { Thumbnail } from "./thumbnail";

type ComicItem = {
  available: number
}

export type Character = {
  id: number;
  name: string;
  description: string;
  thumbnail: Thumbnail;
  comics: ComicItem;
  series: ComicItem;
  events: ComicItem;
};
