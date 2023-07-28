export interface IRequest {
  searchString: string
  page: number
  perPage: 10 | 25 | 50
  sort: 'ASC' | 'DESC' | false
}
