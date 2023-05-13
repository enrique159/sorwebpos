// LAYOUTS
import DefaultLayout from "@/layouts/DefaultLayout.vue"
import LoginLayout from "@/layouts/LoginLayout.vue"

// VIEWS
/* LoginLayout */
import LoginRoutes from "@/views/auth/routes"

/* DefaultLayout */
import MenuRoutes from "@/views/menu/routes"
import OrdersRoutes from "@/views/orders/routes"
import TablesRoutes from "@/views/tables/routes"
import ReservationsRoutes from "@/views/reservations/routes"
import DashboardRoutes from "@/views/dashboard/routes"
import RestaurantsRoutes from "@/views/restaurants/routes"
import SettingsRoutes from "@/views/settings/routes"

/* NotFoundView */
import NotFoundView from "@/views/NotFoundView.vue"

const routes = [
  {
    path: "/",
    redirect: "/menu",
    component: DefaultLayout,
    children: [
      ...MenuRoutes,
      ...OrdersRoutes,
      ...TablesRoutes,
      ...ReservationsRoutes,
      ...DashboardRoutes,
      ...RestaurantsRoutes,
      ...SettingsRoutes,
    ],
  },
  {
    path: "/auth",
    component: LoginLayout,
    redirect: "/auth/signin",
    children: [
      ...LoginRoutes,
    ],
  },
  // 404
  {
    path: '/:pathMatch(.*)*',
    name: "NotFound",
    component: NotFoundView,
  },
]

export default routes