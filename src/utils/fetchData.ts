type Resource = "comics" | "characters" | "creators";

interface fetchDataParams {
  resource: Resource;
  limit: number;
}

export async function fetchData({ resource, limit = 20 }: fetchDataParams) {
  return await fetch(
    `${process.env.BASE_URL}/${resource}?ts=${process.env.TIMESTAMP}&apikey=${process.env.PUBLIC_KEY}&hash=${process.env.HASH}&limit=${limit}`
  );
}
