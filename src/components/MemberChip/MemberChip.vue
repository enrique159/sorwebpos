<template>
  <div class="member-chip" :class="{ selected }">
    <circle :class="`bg-${color}-0`">
      <span class="tw-bold">{{ firstLetter }}</span>
    </circle>
    <span class="ts-b4 tw-medium">{{ name }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
type Color = 'purple' | 'peach' | 'green' | 'yellow' | 'cian' | 'violete' | 'pink'

const { color, name, selected = false } = defineProps<{
  color: Color;
  name: string;
  selected?: boolean;
}>();

const firstLetter = computed(() => name[0].toUpperCase());
</script>

<style lang="scss" scoped>
.member-chip {
  gap: 0.5rem;
  display: flex;
  width: fit-content;
  align-items: center;
  background: $color-black-1;
  padding: 4px 16px 4px 4px;
  border-radius: 2rem;
  border: 1px solid $color-black-4;
  circle {
    width: 1.7rem;
    height: 1.7rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      color: rgba($color: #000000, $alpha: 0.6);
    }
  }
}

.selected {
  background: $color-black-3;
}
</style>