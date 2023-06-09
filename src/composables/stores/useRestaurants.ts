import { Restaurant, Restaurants } from '@/app/modules/Restaurants/domain/interfaces'
import { useRestaurantStore } from '@/stores/restaurantStore'
import { storeToRefs } from 'pinia'

export const useRestaurants = () => {
  const restaurantStore = useRestaurantStore()
  const { restaurants, mainRestaurant } = storeToRefs(restaurantStore)

  // Methods
  // SET RESTAURANTS: Hace set de los restaurantes al store
  const setRestaurants = (value: Restaurants) => {
    restaurantStore.setRestaurants(value)
  }

  // SET MAIN RESTAURANT: Hace set del restaurante principal al store
  const setMainRestaurant = (value: Restaurant) => {
    restaurantStore.setMainRestaurant(value)
  }

  // Actions
  // GET RESTAURANTS: Obtiene los restaurantes
  const getRestaurants = () => {
    return restaurantStore.GetRestaurants()
  }


  return {
    // Properties
    restaurants,
    mainRestaurant,
    // Methods
    setRestaurants,
    setMainRestaurant,
    // Actions
    getRestaurants,
  }
}