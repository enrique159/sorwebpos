import { User } from "@/app/modules/Users/domain/interfaces"

export interface Auth {
  email: string
  password: string
}

export interface AuthResponse {
  token: string
  user: User
}

export interface IsAuth {
  isAuth: boolean
}