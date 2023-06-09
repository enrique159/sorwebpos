import { storeToRefs } from "pinia"
import { useUserStore } from "@/stores/userStore"
import { User } from '@/app/modules/Users/domain/interfaces'
import { Auth } from "@/app/auth/domain/interfaces"
import decode from 'jwt-decode'

export const useUser = () => {
  const userStore = useUserStore()
  const { user, token } = storeToRefs(userStore)

  // Methods
  // SET USER: Hace set del objeto user al store
  const setUser = (value: User) => {
    user.value = value
  }
  // SET TOKEN: Hace set del token al store
  const setToken = (value: string) => {
    token.value = value
  }
  // LOGOUT: Limpia el store
  const logout = () => {
    userStore.logout()
  }

  // VALIDATE TOKEN: Valida si el token es válido
  const validateToken = () => {
    if (!token.value) return false

    const decodedToken = decode(token.value)
    if (!decodedToken) return false

    const { exp } = decodedToken as any
    if (!exp) return false

    let date = new Date(0)
    date.setUTCSeconds(exp)

    return date.valueOf() > new Date().valueOf()
  }

  // Actions
  // SIGN IN: Hace el login del usuario
  const signIn = (credentials: Auth) => {
    return userStore.signIn(credentials)
  }
  // IS AUTH: Valida si el usuario está autenticado
  const isAuth = () => {
    return userStore.isAuth()
  }
  // GET ME: Obtiene los datos del usuario
  const getMe = () => {
    return userStore.getMe()
  }

  return {
    // Properties
    user,
    token,
    // Methods
    setUser,
    setToken,
    logout,
    validateToken,
    // Actions
    signIn,
    isAuth,
    getMe,
  }
}