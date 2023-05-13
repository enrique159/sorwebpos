import { User } from "@/app/modules/Users/domain/interfaces"
import { IPayload, Response } from "@/app/network/domain/interfaces"
import Http from "@/app/network/Http"
import { Auth } from "../domain/interfaces"
import { AuthResponse } from "../domain/interfaces/Auth"
import { AuthRepositoryModel } from "../domain/services/AuthRepositoryModel"

export class AuthRepository implements AuthRepositoryModel {
  private http: Http

  constructor() {
    this.http = new Http()
  }

  signIn(payload: IPayload<Auth>): Promise<Response<AuthResponse>> {
    return this.http.post<Auth, AuthResponse>("/auth/signin", payload)
  }

  // TODO: Checar si endpoint devuelve un Response<User> o un Response<IsAuth>
  async isAuth(): Promise<Response<User>> {
    return await this.http.get<null, User>("/auth/isauth")
  }

  signOut(): Promise<Response<void>> {
    return Promise.resolve({ data: undefined } as Response<void>)
  }
}