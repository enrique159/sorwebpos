<template>
  <div class="restaurant-side-menu">
    <div class="restaurant-side-menu__menu">
      <v-select
        :label="$t('Restaurants.restaurant')"
        class="input-select"
        v-model="currentRestaurant"
        :items="restaurants"
        item-title="name"
        item-value="id"
        append-inner-icon="ri-arrow-down-s-line"
        variant="solo"
        @update:model-value="setRestaurant($event)"
      />

      <section class="menu-settings mb-8">
        <!-- TITLE SECTION -->
        <div class="d-flex align-center">
          <i class="ri-store-2-fill tc-white-4" />
          <h6 class="ts-b3 tc-white-4 tw-medium pl-2">
            {{ $t('Restaurants.restaurant') }}
          </h6>
        </div>
        <v-divider class="mb-2" />

        <!-- MENU ITEMS -->
        <router-link
          v-for="(item) in restaurantSettings"
          :key="item.name"
          :to="item.path"
          class="menu-item"
          :class="{ active: currentRoute.toString() === item.path }"
        >
          <span
            class="ts-b4 tw-medium"
            :class="[ currentRoute.toString() === item.path ? 'tc-text' : 'tc-text-dark', ]"
          >
            {{ $t(item.name) }}
          </span>
        </router-link>
      </section>

      <section class="menu-settings">
        <!-- TITLE SECTION -->
        <div class="d-flex align-center">
          <i class="ri-store-2-fill tc-white-4" />
          <h6 class="ts-b3 tc-white-4 tw-medium pl-2">
            {{ $t('Restaurants.restaurant') }}
          </h6>
        </div>
        <v-divider class="mb-2" />

        <!-- MENU ITEMS -->
        <router-link
          v-for="(item) in menuSettings"
          :key="item.name"
          :to="item.path"
          class="menu-item"
          :class="{ active: currentRoute.toString() === item.path }"
        >
          <span
            class="ts-b4 tw-medium"
            :class="[ currentRoute.toString() === item.path ? 'tc-text' : 'tc-text-dark', ]"
          >
            {{ $t(item.name) }}
          </span>
        </router-link>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue'
import { useRoute } from "vue-router"

// RESTAURANT SELECTION
const restaurants = reactive([
  { id: 1, name: 'Bon Appétit Centro' },
  { id: 2, name: 'Bon Appétit Malecón' },
])

const currentRestaurant = reactive({ id: 1, name: 'Restaurant 1' })

function setRestaurant(restaurantId: number) {
  const restaurant = restaurants.find((restaurant) => restaurant.id === restaurantId)
  currentRestaurant.id = restaurantId
  currentRestaurant.name = restaurant?.name || ''
}
// ---------------------

// RESTAURANT SETTINGS
const restaurantSettings = reactive([
  { name: 'Restaurants.Routes.generalInfo', path: '/restaurants/info' },
  { name: 'Restaurants.Routes.restaurantData', path: '/restaurants/data' },
  { name: 'Restaurants.Routes.users', path: '/restaurants/users' },
])
// MENU SETTINGS
const menuSettings = reactive([
  { name: 'Restaurants.Routes.menuAndProducts', path: '/restaurants/menu-products' },
  { name: 'Restaurants.Routes.discounts', path: '/restaurants/discounts' },
  { name: 'Restaurants.Routes.spacesAndTables', path: '/restaurants/spaces-tables' },
])

const route = useRoute()
const currentRoute = computed(() => route.path)
</script>

<style lang="scss" scoped>
.restaurant-side-menu {
  width: 280px;
  height: 100%;
  padding: 2rem 0;

  &__menu {
    width: 100%;
    height: 100%;
    border-left: 1px solid $color-black-2;
    border-right: 1px solid $color-black-2;
    padding: 1rem;
    overflow-y: auto;

    .menu-settings {
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
  }
}
</style>