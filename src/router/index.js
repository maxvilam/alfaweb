import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
/* import store from "../store/index.js"; */

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/register",
    name: "register",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/RegisterView.vue"),
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/cursos",
    name: "cursos",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CursesView.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LoginView.vue"),
    meta: {
      requiresAuth: false,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  /* const isAuthenticated = store.state.isAuthenticated; */
  /*   if (to.name === "clases" && !store.state.isAuthenticated) {
    next("/login");
  }
  if (to.name === "clases" && localStorage.getItem("isAuthenticated") === null) {
    next("/login");
  } */
  if (
    to.meta.requiresAuth &&
    localStorage.getItem("isAuthenticated") === null
  ) {
    next("/cursos");
  }
  next();
});

export default router;
