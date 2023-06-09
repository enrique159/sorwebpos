import { Restaurant, Restaurants } from '@/app/modules/Restaurants/domain/interfaces'

export type RestaurantState = {
  restaurants: Restaurants | never[]
  mainRestaurant: Restaurant | null
}