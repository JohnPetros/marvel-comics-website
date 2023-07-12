export type ApiResponse<T> = {
  code: number;
  data: { results: T[] };
};
