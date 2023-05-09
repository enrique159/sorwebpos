// LAYOUTS
import DefaultLayout from "@/layouts/DefaultLayout.vue"
import LoginLayout from "@/layouts/LoginLayout.vue"
// VIEWS
import LoginRoutes from "@/views/auth/routes"
import HomeRoutes from "@/views/home/routes"
import EntriesSaleRoutes from "@/views/entriesSale/routes"
import ReservationsRoutes from "@/views/reservations/routes"
import SettingsRoutes from "@/views/settings/routes"

import NotFoundView from "@/views/NotFoundView.vue"

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      ...HomeRoutes,
      ...EntriesSaleRoutes,
      ...ReservationsRoutes,
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