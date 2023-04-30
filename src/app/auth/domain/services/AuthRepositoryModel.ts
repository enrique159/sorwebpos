import { User } from "@/app/modules/Users/domain/interfaces"
import { IPayload, Response } from "@/app/network/domain/interfaces"
import { Auth } from "../interfaces"
import { AuthResponse, IsAuth } from "../interfaces/Auth"

export interface AuthRepositoryModel {
  signIn(payload: IPayload<Auth>): Promise<Response<AuthResponse>>
  isAuth(): Promise<Response<User>>
  signOut(): Promise<Response<void>>
}