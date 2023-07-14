export type ApiResponse<TResource> = {
  code: number;
  data: { results: TResource[] };
};
