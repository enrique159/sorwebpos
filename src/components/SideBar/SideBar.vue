<template>
  <div class="sidebar">
    <section class="upside-section">
      <div class="logo mb-5 pl-3">
        <router-link to="/">
          <span class="ts-b2 tw-semi-bold">
            <i class="ri-instance-fill tc-text-dark"></i>
            Sor <b>POS</b>
          </span>
        </router-link>
      </div>

      <div class="menu">
        <router-link to="/" class="menu-item" :class="{ active: currentRoute.toString() === '/' }">
          <span class="ts-b4 tw-medium" :class="[currentRoute.toString() === '/' ? 'tc-text' : 'tc-text-dark']">
            Inicio
          </span>
        </router-link>

        <router-link to="/" class="menu-item" :class="{ active: currentRoute.toString() === '/' }">
          <span class="ts-b4 tw-medium" :class="[currentRoute.toString() === '/' ? 'tc-text' : 'tc-text-dark']">
            Reservaciones
          </span>
        </router-link>

        <router-link to="/entries-sale" class="menu-item" :class="{ active: currentRoute.toString() === '/entries-sale' }">
          <span class="ts-b4 tw-medium" :class="[currentRoute.toString() === '/entries-sale' ? 'tc-text' : 'tc-text-light']">
            Punto de venta
          </span>
        </router-link>

        <router-link to="/" class="menu-item" :class="{ active: currentRoute.toString() === '/' }">
          <span class="ts-b4 tw-medium" :class="[currentRoute.toString() === '/' ? 'tc-text' : 'tc-text-dark']">
            Configuración
          </span>
        </router-link>
      </div>
    </section>

    <section class="downside-section">
      <div class="team-in-turn mb-8">
        <member-chip color="purple" name="Alfonso R." :selected="true" />
        <member-chip color="green" name="Cameron W." />
        <member-chip color="yellow" name="Jose H." />
      </div>

      <span class="ts-b5 tc-black-4">@ 2023 Sor Pos App</span>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import MemberChip from "@/components/MemberChip/MemberChip.vue";

const route = useRoute();
const currentRoute = computed(() => route.path);
</script>

<style lang="scss" scoped>
.sidebar {
  width: 100%;
  height: 100%;
  max-width: 240px;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .menu {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;

    .menu-item {
      width: 100%;
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      transition: none;
      &:hover {
        background: $color-black-2;
      }
    }
    .active {
      background: $color-black-3 !important;
    }
  }

  .team-in-turn {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>
