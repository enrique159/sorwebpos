import { Restaurant, Restaurants } from '@/app/modules/Restaurants/domain/interfaces'
import { RestaurantState } from '@/types/stores/RestaurantState.type'
import { RestaurantsRepository } from '@/app/modules/Restaurants/repository/RestaurantsRepository'
import { GetRestaurantsUseCase } from '@/app/modules/Restaurants/useCases/GetRestaurants.useCase'
import { defineStore } from 'pinia'

export const useRestaurantStore = defineStore({
  id: 'restaurant',
  state: (): RestaurantState => ({
    restaurants: [],
    mainRestaurant: null,
  }),
  getters: {
    getRestaurants: (state) => state.restaurants,
    getMainRestaurant: (state) => state.mainRestaurant,
  },
  actions: {
    setRestaurants(value: Restaurants) {
      this.restaurants = value
    },
    setMainRestaurant(value: Restaurant) {
      this.mainRestaurant = value
    },

    // GET RESTAURANTS
    GetRestaurants() {
      const restaurantsRepository = new RestaurantsRepository()
      const getRestaurantsUseCase = new GetRestaurantsUseCase(restaurantsRepository)
      const action = getRestaurantsUseCase.execute()
      action.then((response) => {
        this.setRestaurants(response.data)
        return response
      }).catch((error) => {
        //eslint-disable-next-line
        console.log('Error ❗️:', error.errors)
        return error
      })
    },
  },
})