import { storeToRefs } from 'pinia'
import { useMainStore } from '@/store/mainStore'

export const useMain = () => {
  const mainStore = useMainStore()
  const { counter, user } = storeToRefs(mainStore)

  const increment = () => {
    mainStore.increment()
  }

  return {
    // Properties
    counter,
    user,
    // Methods
    increment,
  }
}