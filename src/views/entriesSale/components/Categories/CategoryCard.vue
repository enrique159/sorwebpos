<template>
  <div class="category-card" :class="`bg-${category.color}-0`">
    <i :class="`fa-solid ${category.icon} category-card__icon`"></i>
    <div class="d-flex flex-column">
      <span class="ts-b2 tc-black-1 tw-semi-bold">{{ category.name  }}</span>
      <span class="ts-b4 tc-black-4 tw-regular">{{ category.items }} items</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Category } from '@/types/Category.type';

const { category } = defineProps<{ category: Category }>();
</script>

<style lang="scss" scoped>
.category-card {
  border-radius: 0.5rem;
  padding: 1rem 1rem 0.5rem 1rem;
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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