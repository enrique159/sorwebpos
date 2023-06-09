import type { RestaurantsRepositoryModel } from "../domain/services/RestaurantsRepositoyModel"
import type { Restaurant, Restaurants } from "../domain/interfaces"
import type { Response } from "@/app/network/domain/interfaces"
import type { IPayload } from "@/app/network/domain/interfaces"

import Http from "@/app/network/Http"

export class RestaurantsRepository implements RestaurantsRepositoryModel {
  private http: Http
  private headers = { Authorization: `Bearer ${window.localStorage.getItem('token')}` }

  constructor() {
    this.http = new Http()
  }

  getRestaurants(): Promise<Response<Restaurants>> {
    return this.http.get("/restaurants", { headers: this.headers })
  }

  getById(id: number): Promise<Response<Restaurant>> {
    return this.http.get(`/restaurants/${id}`)
  }

  create(payload: IPayload<Restaurant>): Promise<Response<Restaurant>> {
    return this.http.post("/restaurants", payload)
  }

  update(payload: IPayload<Restaurant>): Promise<Response<Restaurant>> {
    return this.http.put(`/restaurants/${payload.data?._id}`, payload)
  }

  delete(id: string): Promise<Response<Restaurant>> {
    return this.http.delete(`/restaurants/${id}`)
  }
}