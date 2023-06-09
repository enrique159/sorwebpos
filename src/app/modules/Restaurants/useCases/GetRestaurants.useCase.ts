import type { BaseUseCase } from "@/app/shared/common/BaseUseCase"
import type { RestaurantsRepositoryModel } from "../domain/services/RestaurantsRepositoyModel"
import type { Restaurants } from "../domain/interfaces"
import type { Response } from "@/app/network/domain/interfaces"

export class GetRestaurantsUseCase implements BaseUseCase<null, Promise<Response<Restaurants>>> {
  //eslint-disable-next-line
  constructor(private readonly restaurantsRepository: RestaurantsRepositoryModel) {}

  async execute(): Promise<Response<Restaurants>> {
    const response = await this.restaurantsRepository.getRestaurants()
    //eslint-disable-next-line
    console.log("🚀 Restaurants.getRestaurants response: ", response)
    return response
  }
}