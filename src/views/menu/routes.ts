import MenuView from './MenuView.vue'

export const MenuRoutes = [
  {
    path: "/menu",
    name: "Menu",
    component: MenuView,
    meta: {
      requiresAuth: true,
    },
  },
]

export default MenuRoutes