<template>
  <div class="active-orders">
    <div class="order"
      v-for="order in activeOrders"
      :key="order.id"
    >
      <div class="table">
        <span>{{ order.table }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { OrderStatus } from '@/types/Order.type'

const activeOrders = reactive([
  {
    id: 0,
    table: 'M1',
    waiter: 'Jose H.',
    items: 6,
    status: OrderStatus.PROCESSING,
  },
  {
    id: 1,
    table: 'M2',
    waiter: 'Jose H.',
    items: 6,
    status: OrderStatus.PROCESSING,
  },
  {
    id: 2,
    table: 'M3',
    waiter: 'Jose H.',
    items: 6,
    status: OrderStatus.PROCESSING,
  }
])
</script>

<style lang="scss" scoped>
.active-orders {
  width: 100%;
  height: 100%;
  border-top: 1px solid $color-black-3;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(autofill, minmax(200px, 1fr)); 
}
</style>