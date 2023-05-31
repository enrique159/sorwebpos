<template>
  <label class="tc-white-2 ts-b4 pl-2">
    {{ value }}
  </label>
</template>

<script setup lang="ts">
const props = defineProps<{
  value: string
}>()
</script>

<style scoped>

</style>