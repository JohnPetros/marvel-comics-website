export type ApiResponse<TResource> = {
  code: number | string;
  data: { results: TResource[] };
};
