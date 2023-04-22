<template>
  <div class="entries-sale-view">
    <!-- SIDEBAR LEFT -->
    <SideBar class="sidebar-grid" />

    <!-- BODY -->
    <section class="body-grid body">
      <v-container fluid class="mb-6">
        <v-row>
          <div class="search-input">
            <i class="ri-search-line ts-b2 tc-text-dark"></i>
            <input type="text" placeholder="Search" />
          </div>
        </v-row>
      </v-container>


     
      <splitpanes class="default-theme splitter" horizontal>
        <pane min-size="20" :push-other-panes="false">
           <Categories />
        </pane>
        <pane min-size="20" :push-other-panes="false">
          <Products />
        </pane>
      </splitpanes>

      <div class="footer">
        <v-container fluid>
          <v-row>
            <v-col cols="12" class="text-center">
              <span class="ts-b3 tc-text-dark">Total: $ 0.00</span>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </section>

    <!-- SIDEBAR RIGHT -->
    <OrderSide class="checkout-grid" />
  </div>
</template>

<script setup lang="ts">
import SideBar from '@/components/SideBar/SideBar.vue'
import OrderSide from '@/components/OrderSide/OrderSide.vue'
import Categories from '@/components/Categories/Categories.vue'
import Products from '@/components/Products/Products.vue'
// @ts-ignore
import { Splitpanes, Pane } from 'splitpanes'
</script>

<style lang="scss" scoped>
.entries-sale-view {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 240px 1fr 300px;
  grid-template-rows: 1fr;
  grid-template-areas: 'sidebar body checkout';

  .sidebar-grid {
    grid-area: sidebar;
  }

  .body-grid {
    grid-area: body;
  }

  .checkout-grid {
    grid-area: checkout;
  }

  .body {
    height: 100vh;
    padding: 1.5rem 0.5rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 80px 1fr 50px;
    grid-template-areas:
      'search'
      'splitter'
      'footer';
    .search-input {
      width: 100%;
      max-width: 240px;
      padding: 0.2rem 0.4rem;
      background: $color-black-3;
      align-items: center;
      display: flex;
      gap: 0.5rem;
      border-radius: 0.5rem;
      input {
        border: none;
        background: transparent;
        outline: none;
        color: $color-white-3;
        font-size: $b4-size;
        &::placeholder {
          color: $color-black-4;
        }
      }
    }
  }
}

.splitter {
  max-height: 70vh;
  grid-area: splitter;
}

:deep(.splitpanes.default-theme .splitpanes__pane) {
  background-color: $color-black-1;
}

:deep(.splitpanes.default-theme .splitpanes__splitter) {
  height: 16px;
  background-color: $color-black-1;
}

:deep(.splitpanes.default-theme .splitpanes__splitter::before) {
  background-color: $color-white-1;
}

:deep(.splitpanes.default-theme .splitpanes__splitter::after) {
  background-color: $color-white-1;
}

:deep(.default-theme.splitpanes--horizontal>.splitpanes__splitter, .default-theme .splitpanes--horizontal>.splitpanes__splitter) {
  border-top: none;
}
</style>