import { Thumbnail } from "./thumbnail";

export type Order = "asc" | "desc";

export type Category = "comics" | "series" | "events";

export type Comic = {
  id: number;
  title: string;
  thumbnail: Thumbnail;
};
