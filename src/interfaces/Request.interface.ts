export interface IRequest {
  searchString: string
  page: number
  perPage: number
  sort?: 'ASC' | 'DESC' | false
}
