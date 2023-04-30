import type { UsersRepositoryModel } from "../domain/services/UsersRepositoryModel";
import type { User, Users } from "../domain/interfaces";
import type { Response } from "@/app/network/domain/interfaces";
import type { IPayload } from "@/app/network/domain/interfaces";

import Http from "@/app/network/Http";

export class UsersRepository implements UsersRepositoryModel {
  private http: Http;

  constructor() {
    this.http = new Http();
  }

  getUsers(): Promise<Response<Users>> {
    return this.http.get("/users")
  }

  getById(id: number): Promise<Response<User>> {
    return this.http.get(`/users/${id}`)
  }

  create(payload: IPayload<User>): Promise<Response<User>> {
    return this.http.post<User, User>("/users", payload)
  }

  update(payload: IPayload<User>): Promise<Response<User>> {
    return this.http.put(`/users/${payload.data?._id}`, payload)
  }

  delete(id: number): Promise<Response<User>> {
    return this.http.delete(`/users/${id}`)
  }
}