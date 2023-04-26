import { createWebHistory, createRouter } from "vue-router";
// LAYOUTS
import DefaultLayout from "@/layouts/DefaultLayout.vue";
// VIEWS
import Home from "@/views/HomeView.vue";
import EntriesSale from "@/views/entriesSale/EntriesSaleView.vue";
import Reservations from "@/views/reservations/ReservationsView.vue";
import Settings from "@/views/settings/SettingsView.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
      },
      {
        path: "/entries-sale",
        name: "EntriesSale",
        component: EntriesSale,
      },
      {
        path: "/reservations",
        name: "Reservations",
        component: Reservations,
      },
      {
        path: "/settings",
        name: "Settings",
        component: Settings,
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;