export type ApiResponse<TResource> = {
  code: number | string
  status: string
  data: { results: TResource[] }
}
