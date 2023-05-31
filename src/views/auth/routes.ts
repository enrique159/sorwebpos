import AuthModule from "./AuthModule.vue"
import SignInView from "./views/SignInView.vue"

const LoginRoutes = [
  {
    path: "/auth",
    name: "Auth",
    redirect: "/auth/signin",
    component: AuthModule,
    children: [
      {
        path: "/auth/signin",
        name: "SignIn",
        component: SignInView,
      },
    ],
  },
]

export default LoginRoutes