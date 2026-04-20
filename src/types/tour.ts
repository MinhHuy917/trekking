export type TourDifficulty = 'easy' | 'medium' | 'hard'

export type Tour = {
  id: string
  name: string
  slug: string
  location: string
  duration: string
  difficulty: TourDifficulty
  price: number
  images: string[]
  shortDescription: string
  itinerary: {
    day: number
    title: string
    content: string
  }[]
  includes: string[]
  excludes: string[]
}
