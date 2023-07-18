import { Comic } from '@/@types/comic'
import { Series } from '@/@types/series'

export function checkImageAvailability(data: Comic | Series) {
  return !data.thumbnail.path.includes('image_not_available')
}
