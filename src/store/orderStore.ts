import { defineStore } from 'pinia'
import type { OrderState } from '@/types/OrderState.type'
import { Product } from '@/types/Product.type'

export const useOrderStore = defineStore('order', {
  state: ():OrderState => ({
    order: [],
  }),
  getters: {
    total: (state) => state.order.reduce((acc, item) => acc + item.item.price, 0),
    getOrder: (state) => state.order,
    getSubtotal: (state) => () => {
      return state.order.reduce((acc, item) => acc + item.item.price * item.quantity, 0)
    }
  },
  actions: {
    add(item: Product) {
      if (this.order.some((i) => i.item.id === item.id)) {
        this.order = this.order.map((i) => {
          if (i.item.id === item.id) {
            i.quantity++
          }
          return i
        })
        return
      }
      this.order.push({
        item,
        quantity: 1,
      })
    },
    remove(item: Product) {
      if (this.order.some((i) => i.item.id === item.id)) {
        this.order = this.order.map((i) => {
          if (i.item.id === item.id) {
            i.quantity--
          }
          return i
        })
        this.order = this.order.filter((i) => i.quantity > 0)
        return
      }
    },
    removeEntireItem(item: Product) {
      this.order = this.order.filter((i) => i.item.id !== item.id)
    }
  },
})