import ReservationsView from "./ReservationsView.vue"

const ReservationsRoutes = [
  {
    path: "/reservations",
    name: "Reservations",
    component: ReservationsView,
    meta: { requiresAuth: true },
  },
]

export default ReservationsRoutes