import OrdersView from './OrdersView.vue'

const OrdersRoutes = [
  {
    path: '/orders',
    name: 'Orders',
    component: OrdersView,
    meta: { requiresAuth: true },
  },
]

export default OrdersRoutes