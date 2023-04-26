<template>
  <div class="default-layout">
    <SideBar class="side-bar-grid" />
    <router-view class="body-grid" />
  </div>
</template>

<script setup lang="ts">
import SideBar from '@/components/SideBar/SideBar.vue'
</script>

<style lang="scss" scoped>
.default-layout {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'sidebar body';

  .sidebar-grid {
    grid-area: sidebar;
  }

  .body-grid {
    grid-area: body;
  }
}
</style>