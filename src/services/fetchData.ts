interface fetchDataParams {
  resource: string
  limit?: number
  orderParams?: string[]
  search?: string
  offset?: number
  revalidate?: number | false
}

function formatOrderParams(orderParam: string) {
  return 'orderBy=' + orderParam
}

export async function fetchData({
  resource,
  limit,
  orderParams = [],
  search,
  offset,
  revalidate = 0,
}: fetchDataParams) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
  const ts = process.env.NEXT_PUBLIC_TIMESTAMP
  const apikey = process.env.NEXT_PUBLIC_PUBLIC_KEY
  const hash = process.env.NEXT_PUBLIC_HASH

  const authParams = `ts=${ts}&apikey=${apikey}&hash=${hash}`

  const queryParams = [
    authParams,
    limit ? `limit=${limit}` : '',
    orderParams.length > 0 ? orderParams.map(formatOrderParams).join('&') : '',
    search || '',
    offset ? `offset=${offset}` : '',
  ].join('&')

  return await fetch(`${baseUrl}/${resource}?${queryParams}`, {
    next: { revalidate },
  })
}
