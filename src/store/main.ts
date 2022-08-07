import { defineStore } from 'pinia'
import type { MainState } from '@/types/MainState'

export const useStore = defineStore('main', {
  state: (): MainState => ({
    counter: 0,
    user: {
      name: 'Hello world',
    }
  }),
  getters: {
    double: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++
    },
  }
})