import SettingsView from "./SettingsView.vue"

const SettingsRoutes = [
  {
    path: "/settings",
    name: "Settings",
    component: SettingsView,
    meta: { requiresAuth: true },
  },
]

export default SettingsRoutes