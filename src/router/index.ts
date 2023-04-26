import { createWebHistory, createRouter } from "vue-router";
// LAYOUTS
import DefaultLayout from "@/layouts/DefaultLayout.vue";
// VIEWS
import Home from "@/views/HomeView.vue";
import EntriesSale from "@/views/EntriesSale.vue";

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
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;