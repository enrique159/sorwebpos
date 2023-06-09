import { BaseUseCase } from '@/app/shared/common/BaseUseCase'
import type { UsersRepositoryModel } from "../domain/services/UsersRepositoryModel"
import { User } from '../domain/interfaces'
import { Response } from '@/app/network/domain/interfaces'

export default class GetMeUseCase implements BaseUseCase<null, Promise<Response<User>>> {
  //eslint-disable-next-line
  constructor(private readonly usersRepository: UsersRepositoryModel) { }

  async execute(): Promise<Response<User>> {
    const response = await this.usersRepository.getMe()
    //eslint-disable-next-line
    console.log("🚀 Users.getMe response: ", response)
    return response
  }
}