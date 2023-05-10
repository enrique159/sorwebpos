import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores/appStore'

export const useApp = () => {
  const appStore = useAppStore()
  const { rememberSession, locale } = storeToRefs(appStore)

  const setRememberSession = (value: boolean) => {
    appStore.setRememberSession(value)
  }

  const setLocale = (value: string) => {
    appStore.setLocale(value)
  }

  const getRememberSession = () => {
    return rememberSession.value == 'true'
  }

  return {
    // Properties
    rememberSession,
    locale,
    // Methods
    getRememberSession,
    setRememberSession,
    setLocale,
  }
}