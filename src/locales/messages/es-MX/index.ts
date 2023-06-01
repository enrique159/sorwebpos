// components
import Breadcrumbs from "./components/Breadcrumbs.i18n"
import SideBarMenu from "./components/SideBarMenu.i18n"

// pages
import Regions from "./pages/Regions.i18n"
import Login from "./pages/Login.i18n"
import Home from "./pages/Home.i18n"
import Products from "./pages/Products.i18n"
import SignIn from "./pages/SignIn.i18n"
import Restaurants from "./pages/Restaurants.i18n"

// shared
import General from "./shared/General.i18n"
import Titles from "./shared/Titles.i18n"
import Errors from "./shared/Errors.i18n"

export default {
  // components
  ...Breadcrumbs,
  ...SideBarMenu,

  // pages
  ...Regions,
  ...Login,
  ...Home,
  ...Products,
  ...SignIn,
  ...Restaurants,

  // Shared
  ...General,
  ...Titles,
  ...Errors,
}
