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
        <router-link
          v-for="(item, index) in routes"
          :key="item.name"
          :to="item.path"
          class="menu-item"
          :class="{ active: currentRoute.toString() === item.path }"
        >
          <span
            class="ts-b4 tw-medium"
            :class="[
              currentRoute.toString() === item.path ? 'tc-text' : 'tc-text-dark',
            ]"
          >
            {{ item.name }}
          </span>
        </router-link>
      </div>
    </section>

    <section class="downside-section">
      <div class="team-in-turn mb-8">
        <member-chip color="purple" name="Alfonso R."/>
        <member-chip color="green" name="Cameron W." />
        <member-chip color="yellow" name="Jose H." />
      </div>

      <span class="ts-b5 tc-black-4">@ 2023 Sor Pos App</span>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive } from "vue";
import { useRoute } from "vue-router";
import MemberChip from "@/components/MemberChip/MemberChip.vue";

const routes = reactive([
  { name: "Inicio", path: "/" },
  { name: "Reservaciones", path: "/reservations" },
  { name: "Punto de venta", path: "/entries-sale" },
  { name: "Configuración", path: "/settings" },
]);

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
