import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/HomeView.vue";
import EntriesSale from "@/views/EntriesSale.vue";
//import About from "@/views/About.vue";

const routes = [
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;