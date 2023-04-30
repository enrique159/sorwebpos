<template>
  <div class="categories pa-1">
    <category-card
      v-for="category in mockCategories"
      :key="category.id"
      :category="category" 
    />
  </div>
</template>

<script setup lang="ts">
import CategoryCard from './CategoryCard.vue';
import { mockCategories } from '@/common/mockCategories';
</script>

<style lang="scss" scoped>
.categories {
  width: 100%;
  height: 100%;
  gap: 0.4rem;
  display: grid;
  overflow-y: auto;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  grid-template-rows: 130px;
}
</style>