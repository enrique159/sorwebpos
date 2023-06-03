import RestaurantsModule from './RestaurantsModule.vue'
// Views
import GeneralInfo from './views/GeneralInfoView.vue'
import RestaurantData from './views/RestaurantDataView.vue'
import UsersPermissions from './views/UsersPermissionsView.vue'
import Menus from './views/MenusView.vue'
import CategoriesProducts from './views/CategoriesProductsView.vue'
import DiscountsCoupons from './views/DiscountsCouponsView.vue'
import SpacesTables from './views/SpacesTablesView.vue'

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
      {
        path: '/restaurants/data',
        name: 'RestaurantData',
        component: RestaurantData,
      },
      {
        path: '/restaurants/users',
        name: 'UsersPermissions',
        component: UsersPermissions,
      },
      {
        path: '/restaurants/menus',
        name: 'Menus',
        component: Menus,
      },
      {
        path: '/restaurants/categories-products',
        name: 'CategoriesProducts',
        component: CategoriesProducts,
      },
      {
        path: '/restaurants/discounts',
        name: 'DiscountsCoupons',
        component: DiscountsCoupons,
      },
      {
        path: '/restaurants/spaces-tables',
        name: 'SpacesTables',
        component: SpacesTables,
      },
    ],
  },
]

export default RestaurantsRoutes