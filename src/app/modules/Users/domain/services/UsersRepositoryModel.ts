import type { Users, User } from "../interfaces"
import type { IPayload, Response } from "@/app/network/domain/interfaces"

export interface UsersRepositoryModel {
  getUsers(): Promise<Response<Users>>;
  getById(id: number): Promise<Response<User>>;
  getMe(): Promise<Response<User>>;
  create(payload: IPayload<User>): Promise<Response<User>>;
  update(payload: IPayload<User>): Promise<Response<User>>;
  delete(id: number): Promise<Response<User>>;
}