import { Category as ComicCategory } from "@/@types/comic";

type Resource = "characters" | ComicCategory;
interface fetchDataParams {
  resource: Resource;
  limit?: number;
  orderParams?: string[];
}

function formatOrderParams(orderParam: string) {
  return "orderBy=" + orderParam;
}

export async function fetchData({
  resource,
  limit = 20,
  orderParams = [],
}: fetchDataParams) {
  const authParams = `ts=${process.env.NEXT_PUBLIC_TIMESTAMP}&apikey=${process.env.NEXT_PUBLIC_PUBLIC_KEY}&hash=${process.env.NEXT_PUBLIC_HASH}`;

  return await fetch(
    `${
      process.env.NEXT_PUBLIC_BASE_URL
    }/${resource}?${authParams}&limit=${limit}${
      orderParams.length > 0
        ? "&" + orderParams.map(formatOrderParams).join("&")
        : ""
    }`
  );
}
