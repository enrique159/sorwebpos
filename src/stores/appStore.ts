import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

// Types
import type { AppState } from '@/types/stores/AppState.type'

export const useAppStore = defineStore({
  id: 'app',
  state: (): AppState => ({
    rememberSession: useLocalStorage('rememberSession', 'false'),
    locale: useLocalStorage('locale', 'es-MX'),
  }),
  getters: {
    getRememberSession: (state) => state.rememberSession == 'true',
    getLocale: (state) => state.locale,
  },
  actions: {
    setRememberSession(value: boolean) {
      this.rememberSession = value.toString()
    },
    setLocale(value: string) {
      this.locale = value
    },
  },
})