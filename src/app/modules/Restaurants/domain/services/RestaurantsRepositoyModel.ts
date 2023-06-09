import type { Restaurants, Restaurant } from "../interfaces"
import type { IPayload, Response } from "@/app/network/domain/interfaces"

export interface RestaurantsRepositoryModel {
  getRestaurants(): Promise<Response<Restaurants>>;
  create(payload: IPayload<Restaurant>): Promise<Response<Restaurant>>;
  update(payload: IPayload<Restaurant>): Promise<Response<Restaurant>>;
  delete(id: string): Promise<Response<Restaurant>>;
}