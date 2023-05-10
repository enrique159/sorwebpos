<template>
  <div class="products pa-1">
    <product-card
      v-for="product in mockProducts"
      :key="product.id"
      :product="product"
      color="green"
    />
  </div>
</template>

<script setup lang="ts">
import ProductCard from './ProductCard.vue';
import { mockProducts } from '@/common/mockProducts';
</script>

<style lang="scss" scoped>
.products {
  width: 100%;
  height: 100%;
  gap: 0.4rem;
  display: grid;
  overflow-y: auto;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  grid-template-rows: 130px;
}
</style>