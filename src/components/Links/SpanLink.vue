<template>
  <router-link :to="props.path">
    <span
      :class="[ customSpanClass ? customSpanClass : 'tc-black-4 ts-b4 tw-medium' ]"
    >
      {{ props.text }}
    </span>
  </router-link>
</template>

<script setup lang="ts">
const props= defineProps<{
  path: string
  text: string
  customSpanClass?: string
}>()
</script>