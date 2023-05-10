<template>
  <div class="pt-2 h-100">
    <div class="active-orders">
      <div class="order" v-for="order in activeOrders" :key="order.id">
        <div class="table">
          <span>{{ order.table }}</span>
        </div>
        <div class="d-flex flex-column pl-2">
          <span class="tc-text ts-b3 tw-semi-bold">{{ order.waiter }}</span>
          <span class="tc-text-light ts-b4 tw-medium">
            {{ order.items }} items <i class="ri-arrow-right-line mx-1" /> Kitchen
          </span>
        </div>
        <v-chip size="x-small" class="status">
          {{ order.status.toLowerCase() }}
        </v-chip>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue"
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
  },
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

  .order {
    display: flex;
    align-items: center;
    padding: 12px;
    border-right: 1px solid $color-black-3;
    width: 100%;
    height: 100%;
    position: relative;

    &:last-child {
      border-right: none;
    }

    .table {
      background-color: $color-black-3;
      width: 42px;
      height: 42px;
      display: grid;
      place-items: center;
      border-radius: 0.6rem;
    }

    .status {
      position: absolute;
      top: 6px;
      right: 6px;
    }
  }
}
</style>