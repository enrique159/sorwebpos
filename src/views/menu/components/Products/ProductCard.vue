<template>
  <div
    class="product-card"
    :class="[
      `${quantityAdded ? getColor : 'bg-black-3'}`,
      quantityAdded ? 'added' : '',
    ]"
  >
    <div class="border-color" :class="`${getColor}`"></div>
    <p class="ts-b5" :class="[ quantityAdded ? 'tc-black-3' : 'tc-white-4' ]">
      <span>Orders</span>
      <i class="ri-arrow-right-line mx-1"></i>
      <span>Kitchen</span>
    </p>
    <h6 class="ts-b3" :class="[ quantityAdded ? 'tc-black-1' : 'tc-white-0' ]">{{ product.name }}</h6>
    <p class="ts-b4 mb-3" :class="[ quantityAdded ? 'tc-black-3' : 'tc-white-3' ]">{{ getPrice }}</p>
    <!-- <div class="d-flex flex-column">
      <span class="ts-b2 tc-black-1 tw-semi-bold">{{ product.name  }}</span>
      <span class="ts-b4 tc-black-4 tw-regular">{{ product.items }} items</span>
    </div> -->
    <div class="d-flex align-center justify-end">
      <button
        class="btn-quantity"
        @click="handleQuantity('subtract')"
      >
        <i class="ri-subtract-line" :class="[ quantityAdded ? 'tc-black-3' : 'tc-white-3' ]"></i>
      </button>
      <span class="ts-b3 tw-semi-bold mx-2" :class="[ quantityAdded ? 'tc-black-3' : 'tc-white-3' ]">{{ quantity }}</span>
      <button
        class="btn-quantity"
        @click="handleQuantity('add')"
      >
        <i class="ri-add-line" :class="[ quantityAdded ? 'tc-black-3' : 'tc-white-3' ]"></i>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from "@/types/Product.type"
import { ref, computed, watch } from "vue"
import { useOrder } from "@/composables/stores/useOrder"

const { product, color } = defineProps<{ product: Product; color: string }>()

const { order, remove, add } = useOrder()

// watch if this has been removed from the order
const removed = computed(() => {
  const item = order.value.find((item) => item.item.id === product.id)
  if (item) {
    return false
  }
  return true
})

watch(removed, (value) => {
  if (value) {
    quantity.value = 0
  }
})

// Quantity
const quantity = ref(0)

const quantityAdded = computed(() => quantity.value > 0)

const handleQuantity = (type: "add" | "subtract") => {
  if (type === "add") {
    add(product)
    quantity.value += 1
  } else {
    if (quantity.value === 0) {
      return
    }
    remove(product)
    quantity.value -= 1
  }
}

const getColor = computed(() => {
  return `bg-${color}-0`
})

const getPrice = computed(() => {
  // convert to decimal if it's an enteger
  if (Number.isInteger(product.price)) {
    return `$${product.price}.00`
  }
  const regex = /\B(?=(\d{3})+(?!\d))/g
  if (product.price.toString().split(".")[1]?.length === 1) {
    return `$${product.price.toString().replace(regex, ",")}0`
  }
  return `$${product.price.toString().replace(regex, ",")}`
})
</script>

<style lang="scss" scoped>
.product-card {
  background-color: $color-black-3;
  border-radius: 0.5rem;
  padding: 0.6rem 1rem 0.5rem 1rem;
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  transition: $transition-fast;

  .btn-quantity {
    border: 2px solid $color-black-4;
    width: 28px;
    height: 28px;
    border-radius: 10px;
  }

  .border-color {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 6px;
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }

  &__icon {
    font-size: 1.5rem;
    color: $color-black-1;
  }

  span {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
}
</style>
