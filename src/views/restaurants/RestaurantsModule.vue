<template>
  <div class="restaurants-module">
    <restaurant-side-menu />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import RestaurantSideMenu from './components/RestaurantSideMenu.vue'
</script>

<style lang="scss" scoped>
.restaurants-module {
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
}
</style>