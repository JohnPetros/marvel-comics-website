interface fetchDataParams {
  resource: string;
  limit?: number;
  orderParams?: string[];
  search?: string;
}

function formatOrderParams(orderParam: string) {
  return "orderBy=" + orderParam;
}

export async function fetchData({
  resource,
  limit,
  orderParams = [],
  search,
}: fetchDataParams) {
  const authParams = `ts=${process.env.NEXT_PUBLIC_TIMESTAMP}&apikey=${process.env.NEXT_PUBLIC_PUBLIC_KEY}&hash=${process.env.NEXT_PUBLIC_HASH}`;

  return await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/${resource}?${authParams}${
      limit ? "&limit=" + limit : ""
    }${
      orderParams.length > 0
        ? "&" + orderParams.map(formatOrderParams).join("&")
        : ""
    }${search ? "&" + search : ""}`
  );
}
