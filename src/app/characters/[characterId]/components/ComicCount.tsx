import { Category } from "@/@types/comic";

interface ComicCountProps {
  count: number;
  category: Category;
}

export function ComicCount({ count, category }: ComicCountProps) {
  return (
    <div className="rounded-full border-4 border-white w-24 h-24 text-white flex flex-col items-center justify-center">
      <dt className="font-bold text-lg">{count}</dt>
      <dd>{category}</dd>
    </div>
  );
}
