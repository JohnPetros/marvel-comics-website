import { Thumbnail } from "./thumbnail";

export type Category = "comics" | "series" | "events";

type CreatorItem = {
  name: string;
  role: string;
};

type DateItem = {
  type: string;
  date: string;
};

type PriceItem = {
  type: string;
  price: number;
};

type Object = {
  [key: string]: any;
};

export interface Comic extends Object {
  id: number;
  title: string;
  name: string;
  thumbnail: Thumbnail;
  description: string;
  dates: DateItem[];
  creators: { items: CreatorItem[] };
  startYear: number;
  issueNumber: number;
  isbn: number;
  issn: number;
  upc: number;
  pageCount: number;
  format: string;
  prices: PriceItem[];
}
