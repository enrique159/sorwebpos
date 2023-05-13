import { IPayload, Response } from "@/app/network/domain/interfaces"
import { BaseUseCase } from "@/app/shared/common/BaseUseCase"
import { Auth, AuthResponse } from "../domain/interfaces"
import { AuthRepositoryModel } from "../domain/services/AuthRepositoryModel"

export class SignInUseCase implements BaseUseCase<Auth, Promise<Response<AuthResponse>>> {
  constructor(private readonly authRepository: AuthRepositoryModel) {}

  async execute(credentials: Auth): Promise<Response<AuthResponse>> {
    const payload: IPayload<Auth> = {
      data: credentials,
      auth: false,
    }
    return await this.authRepository.signIn(payload)
  }
}