import { storeToRefs } from "pinia"
import { useOrderStore } from "@/stores/orderStore"
import { Product } from "@/types/Product.type"

export const useOrder = () => {
  const orderStore = useOrderStore()
  const { order } = storeToRefs(orderStore)

  const add = (item: Product) => {
    orderStore.add(item)
  }

  const remove = (item: Product) => {
    orderStore.remove(item)
  }

  const removeEntireItem = (item: Product) => {
    orderStore.removeEntireItem(item)
  }

  return {
    // Properties
    order,
    // Methods
    add,
    remove,
    removeEntireItem,
  }
}