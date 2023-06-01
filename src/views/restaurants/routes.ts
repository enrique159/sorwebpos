import RestaurantsModule from './RestaurantsModule.vue'
// Views
import GeneralInfo from './views/GeneralInfoView.vue'

const RestaurantsRoutes = [
  {
    path: '/restaurants',
    name: 'Restaurants',
    redirect: '/restaurants/info',
    component: RestaurantsModule,
    meta: { requiresAuth: true },
    children: [
      {
        path: '/restaurants/info',
        name: 'GeneralInfo',
        component: GeneralInfo,
      },
    ],
  },
]

export default RestaurantsRoutes