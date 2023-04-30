import type { BaseUseCase } from "@/app/shared/common/BaseUseCase";
import type { UsersRepositoryModel } from "../domain/services/UsersRepositoryModel";
import type { Users } from "../domain/interfaces";
import type { Response } from "@/app/network/domain/interfaces";

export class GetUsers implements BaseUseCase<null, Promise<Response<Users>>> {
  constructor(private readonly usersRepository: UsersRepositoryModel) {}

  async execute(): Promise<Response<Users>> {
    const response = this.usersRepository.getUsers();
    console.log("GetUsers response", response);
    return response;
  }
}