import { Category } from '@/@types/comic'
import { Order } from '@/@types/order'

export interface getComicsParams {
  category: Category
  order?: Order
  search?: string
  limit?: number
  offset?: number
  revalidate?: number | false
}

export interface getComicByIdParams {
  category: Category
  id: number
}

export interface getCharactersParams {
  order?: Order
  search?: string
  limit?: number
  offset?: number
}
