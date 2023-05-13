import { User } from '@/app/modules/Users/domain/interfaces'
import { RemovableRef } from '@vueuse/core'

export type UserState = {
  token: RemovableRef<string>;
	user: User;
}