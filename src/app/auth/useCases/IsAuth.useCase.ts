import { User } from "@/app/modules/Users/domain/interfaces";
import { Response } from "@/app/network/domain/interfaces";
import { BaseUseCase } from "@/app/shared/common/BaseUseCase";
import { AuthRepositoryModel } from "../domain/services/AuthRepositoryModel";

export class IsAuthUseCase implements BaseUseCase<null, Promise<Response<User>>> {
  constructor(private readonly authRepository: AuthRepositoryModel) {}

  async execute(): Promise<Response<User>> {
    return await this.authRepository.isAuth()
  }
}