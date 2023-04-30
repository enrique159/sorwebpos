// LAYOUTS
import DefaultLayout from "@/layouts/DefaultLayout.vue"
// VIEWS
import HomeRoutes from "@/views/home/routes"
import EntriesSaleRoutes from "@/views/entriesSale/routes"
import ReservationsRoutes from "@/views/reservations/routes"
import SettingsRoutes from "@/views/settings/routes"

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
    // 404
    // {
    //   path: '/:pathMatch(.*)*',
    //   name: "NotFound",
    //   component: NotFoundView,
    // },
  },
]

export default routes