import TablesView from './TablesView.vue'

const TablesRoutes = [
  {
    path: '/tables',
    name: 'Tables',
    component: TablesView,
    meta: { requiresAuth: true },
  },
]

export default TablesRoutes