
export interface PaginateData<T> {
  data: T[],
  meta: {
    last_page: number,
    current_page: number
  }
}
